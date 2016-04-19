'use strict';

var Protocol = require('azure-iot-device-amqp').Amqp;
var Client = require('azure-iot-device').Client;
var Message = require('azure-iot-device').Message;
var usonic = require('r-pi-usonic');

// String containing Hostname, Device Id & Device Key in the following formats:
//  "HostName=<iothub_host_name>;DeviceId=<device_id>;SharedAccessKey=<device_key>"
var connectionString = 'HostName=brijsampleiothub.azure-devices.net;DeviceId=brijRaspberryPi;SharedAccessKey=q5Icfr5mzOTCh08L/jE0kM2cxRddk4uwjpowXx0yrIg=';

// fromConnectionString must specify a transport constructor, coming from any transport package.
var client = Client.fromConnectionString(connectionString, Protocol);

var connectCallback = function (err) {
  if (err) {
    console.error('Could not connect: ' + err.message);
  } else {
    console.log('Client connected');
    client.on('message', function (msg) {
      console.log('Id: ' + msg.messageId + ' Body: ' + msg.data);
      client.complete(msg, printResultFor('completed'));
      // reject and abandon follow the same pattern.
      // /!\ reject and abandon are not available with MQTT
    });

    // Create a message and send it to the IoT Hub every second
    /*var sendInterval = setInterval(function () {
      var windSpeed = 10 + (Math.random() * 4); // range: [10, 14]
      var data = JSON.stringify({ deviceId: 'myFirstDevice', windSpeed: windSpeed });
      var message = new Message(data);
      message.properties.add('myproperty', 'myvalue');
      console.log('Sending message: ' + message.getData());
      client.sendEvent(message, printResultFor('send'));
    }, 2000);*/

     usonic.init(function(err){
	if(err)
	{	
 	console.log(err);
	}
	else
	{
  		 console.log('no error found');
   		var sensor = usonic.createSensor(23,24,1000);

		setInterval(function() {
    			console.log('Distance: ' + sensor().toFixed(2) + ' cm');
			var data = JSON.stringify({ deviceId: 'brijRaspberryPi', distance: sensor().toFixed(2)});
      			var message = new Message(data);
	      		message.properties.add('myproperty','myvalue');
      			console.log('Sending message: ' + message.getData());
      			client.sendEvent(message, printResultFor('send'));

	},2000);
	}

	});



	


    client.on('error', function (err) {
      console.error(err.message);
    });

    client.on('disconnect', function () {
      clearInterval(sendInterval);
      client.removeAllListeners();
      client.connect(connectCallback);
    });
  }
};

client.open(connectCallback);

// Helper function to print results in the console
function printResultFor(op) {
  return function printResult(err, res) {
    if (err) console.log(op + ' error: ' + err.toString());
    if (res) console.log(op + ' status: ' + res.constructor.name);
  };
}
