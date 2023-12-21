const { error } = require("console");
const { promises } = require("dns");
const fs = require("fs");

let data =fs.readFileSync("a1.txt", "utf8",'r' );

let s=removeExtraSpaces(data);
function removeExtraSpaces(inputString) {
  return inputString.replace(/\s+/g, ' ');
}

fs.writeFileSync("a1.txt",s,"utf8");
