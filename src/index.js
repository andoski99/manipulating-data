import { companiesData } from "./companies-data";

const before = document.getElementById("before");
const after = document.getElementById("after");

const manipulatedData = [1,2,3,4,5,6,7,8,9,0];

before.innerHTML = JSON.stringify(companiesData, null, 2);
after.innerHTML = JSON.stringify(manipulatedData, null, 2);

//TODO: add the manipulated data array to the 'after' div.

