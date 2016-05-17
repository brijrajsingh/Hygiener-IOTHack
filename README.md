# Hygiener-IOT Solution

####Hygiener is an Azure Based IOT project developed during a 2 day hack at Microsoft. Hygiener is a product that aims at fnding the Hygiene index of a workplace by placing sensors at Doors and on the Dis-infectant bottles, Sensors send information about how many times the door was operated to get inside/outside the workplace/Washrooms/Hospital Wards,and how many times the dis-infectant bottle may have been used by finding if a person's hands were too near the bottle. 
####The data is sent to Azure IOT Hub, where the stream analytics Jobs make sense of data and sends it over to SQL from where the Power BI Reporting could show views over this data. Additionally the raw data is dumped in Azure Data lake for further analytics. A Machine learning implementation on top of the same data can revel interesting insights like predictive Hygiene Index, or if one can gather the relative attendance in the workplace, Machine learning models can also suggest how attendance fares when hygiene index of the workplace gets low. 

## Solution Overview
![Solution Overview](https://github.com/brijrajsingh/Hygiener-IOTHack/blob/master/archoverview.png "Solution Overview")

###Power BI Report
#### A power bi hosted report is available at - https://msit.powerbi.com/groups/me/dashboards/e17a0dea-53d0-4bcf-8b08-90c8bf44e7f8 For access to it drop an email to the team at brsingh@microsoft.com. A snapshot of the report is shown below 

![Power BI Report](https://github.com/brijrajsingh/Hygiener-IOTHack/blob/master/BI-1.png "Power BI Report 1")

![Power BI Report](https://github.com/brijrajsingh/Hygiener-IOTHack/blob/master/BI-2.png "Power BI Report 2")
