class naicsNode {
  constructor(code, title, desc, childNodes) {
      this.code = code;
      this.title = title;
      this.desc = desc;
      this.childNodes = childNodes;
  }
}

function CleanTitle(icky){
  if(icky.slice(-1) == "T"){
      icky = icky.slice(0, -1);
  }
  return icky;
}

let recordTypes = ['Sectors', 'SubSectors','IndustryGroups','NaicsIndustries','NationalIndustries'];

let sectors = [];
let subSectors = [];
let IndustryGroups = [];
let NaicsIndustries = [];
let NationalIndustries = [];

let currentSector = {};
let currentSubSector = {};
let currentIndustryGroup = {};
let currentNaicsIndustry = {};
let currentNationalIndustry = {};

let code1 = {}
let code2 = [];
let code3 = [];
let code4 = [];
let code5 = [];
let code6 = [];

// conver file.JSON into javascript dictionary
const fs = require('fs');
let rawdata = fs.readFileSync('NAICS_2022.json');
let naics = JSON.parse(rawdata);


code2 = naics;
//console.log("Sectors: " + Object.keys(code2).length);
Object.keys(code2).forEach( a => {
  currentSector = new naicsNode(code2[a].code, CleanTitle(code2[a].title), code2[a].desc, code2[a].childNodes)
  sectors.push(currentSector);
  SaveThisRecord(recordTypes[0], currentSector);

  code3 = currentSector.childNodes;
  //console.log("subSectors:" + Object.keys(code3).length);
  Object.keys(code3).forEach( b => {
      currentSubSector = new naicsNode(code3[b].code, CleanTitle(code3[b].title), code3[b].desc, code3[b].childNodes)
      subSectors.push(currentSubSector);
      //SaveThisRecord(recordTypes[1], currentSubSector);

      code4 = currentSubSector.childNodes;
      //console.log("IndustryGroups: " + Object.keys(code4).length);
      Object.keys(code4).forEach( c => {
          currentIndustryGroup = new naicsNode(code4[c].code, CleanTitle(code4[c].title), code4[c].desc, code4[c].childNodes)
          IndustryGroups.push(currentIndustryGroup);
          //SaveThisRecord(recordTypes[2], currentIndustryGroup)
  
          code5 = currentIndustryGroup.childNodes;
          //console.log("NaicsIndustries: " + Object.keys(code5).length);
          Object.keys(code5).forEach( d => {
              currentNaicsIndustry = new naicsNode(code5[d].code, CleanTitle(code5[d].title), code5[d].desc, code5[d].childNodes)
              NaicsIndustries.push(currentNaicsIndustry);
              //SaveThisRecord(recordTypes[3], currentNaicsIndustry)
  
              code6 = currentNaicsIndustry.childNodes;
              //console.log("NationalIndustries: " + Object.keys(code6).length);
              Object.keys(code6).forEach( e => {
                  currentNationalIndustry = new naicsNode(code6[e].code, CleanTitle(code6[e].title), code6[e].desc, code6[e].childNodes)
                  NationalIndustries.push(currentNationalIndustry);
                  //SaveThisRecord(recordTypes[4], currentNationalIndustry)
              })
          });
      });

  });
});
