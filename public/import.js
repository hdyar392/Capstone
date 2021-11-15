
const a = typeof window !=='undefined' ? localStorage.getItem(temperature) : null
const b = typeof window !=='undefined' ? localStorage.getItem(lights) : null

// let a = localStorage.getItem(temperature);
// let b = localStorage.getItem(lights);

// let a;

// if (typeof window !== 'undefined') {
//   a = window.localStorage.getItem('temperature', JSON.stringify(temperature))
// }

let statusList;

statusList = [
  {
    temperature: a
  },
  {
    lightStatus: b
  }
  ]

//console.log(a)

var fs = require('fs');
var stuff = JSON.stringify(statusList)

fs.writeFile('./input.json', stuff, () => {});

