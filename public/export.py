import json
#import time

a = 80
b = 8.1
c = 1.020
d = 'ON'
e = 'OFF'
f = 'ON'

data = [
  {"temperature":a},
  {"pH":b},
  {"salinity":c},
  {"lightStatus":d},
  {"heaterStatus":e},
  {"pumpStatus":f}
]

jsonString= json.dumps(data, indent=2)
jsonFile = open("output.json", "w")
jsonFile.write(jsonString)

jsonFile.close()




