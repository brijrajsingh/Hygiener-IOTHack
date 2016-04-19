var usonic = require('r-pi-usonic');
//console.log(usonic);
usonic.init(function(err){

if(err)
{
 console.log(err);
}
else
{
   console.log('no error found');
   var sensor = usonic.createSensor(23,24,2000);

setInterval(function() {
    console.log('Distance: ' + sensor().toFixed(2) + ' cm');
},2000);

//var distance = sensor();
//console.log(distance);

}

});



