WITH Sensordata AS (
SELECT
    deviceId as DeviceID, DoorToggle as ToggleSwitch, dateadd(SS, cast(date as bigint), 
    cast('1970-01-01T00:00:01.0000000Z' as datetime)) as EpochTime, cast(date as bigint) as EpochTimeOriginal
     
FROM
    [DoorToggleDXHack] TIMESTAMP BY dateadd(SS, cast(date as bigint), 
    cast('1970-01-01T00:00:01.0000000Z' as datetime))   
    
    where
      IsFirst(second, 10) = 1
)
      

SELECT
    * 
INTO
    [Door]
FROM
    SensorData


SELECT
*   
INTO

[PowerBIBLRHack]
FROM
 SensorData  


SELECT
*     
INTO
    [DoorToggleStorage]
FROM
    SensorData