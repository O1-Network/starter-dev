const fs = require('fs');
const path = require('path');

let data = fs.readFileSync('./rawNAICS.json');
let NAICSObject = JSON.parse(data);


let vals = Object.values(NAICSObject);
console.log(vals)
let counter = 0;

const parseObject = (jsonObject) => {
  for (let sectorObject in jsonObject) {
    fs.writeFileSync(path.join(__dirname + `/NAICSData/${sectorObject}.json`), JSON.stringify(vals[counter++]));
  }
}

parseObject(NAICSObject);