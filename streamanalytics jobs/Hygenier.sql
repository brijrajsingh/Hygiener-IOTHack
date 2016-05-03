With TouchSensor as (SELECT
    deviceId as DeviceID, cast(distance as float) as Distance, dateadd(SS, cast(date as bigint), 
    cast('1970-01-01T00:00:01.0000000Z' as datetime)) as EpochTime, cast(date as bigint) as EpochTimeOriginal
    
FROM
    [HygenierSA] TIMESTAMP BY dateadd(SS, cast(date as bigint), 
    cast('1970-01-01T00:00:01.0000000Z' as datetime))   
    
    where
      cast(Distance as float) < 10
      and IsFirst(second, 10) = 1
)

      SELECT * INTO [HygeneDB]
FROM touchsensor
      
      SELECT * INTO [hygeneirSA]
FROM
    TouchSensor
      
      SELECT * INTO [Sensor]
FROM
    TouchSensor