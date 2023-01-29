import { companiesData } from "./companies-data";
import {extraRecord} from "./extra-record";

// console.log("Extra Record",extraRecord);
const before = document.getElementById("before");
const after = document.getElementById("after");

// const manipulatedData = extraRecord.zzz?.zzz || "N/A";
// const manipulatedData = Object.values(extraRecord.fieldData);
// extraRecord.fieldData.Country = "USA";
// extraRecord.fieldData.CityState = `${extraRecord.fieldData.City},${extraRecord.fieldData.State}`
// delete extraRecord.fieldData.Id;
// const manipulatedData = Object.values(extraRecord.fieldData);
const {City,State,Zip} = extraRecord.fieldData;
console.log(City,State,Zip);

const manipulatedData = "";
before.innerHTML = JSON.stringify(companiesData, null, 2);
after.innerHTML = JSON.stringify(manipulatedData, null, 2);

//TODO: add the manipulated data array to the 'after' div.
