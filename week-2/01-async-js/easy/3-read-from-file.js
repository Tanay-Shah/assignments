// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('node:fs');


  fs.readFile("tt.txt", "utf8", (err, data) => {
    if (err) {
      console.log("ERROR");
    } else {
      console.log(data);
    }
  });

let content = "HIIIIIIIIIIII";
const write = () => {
  fs.writeFile("tt.txt", content, (err) => {
    console.log("ERRO");
  });
};
// setTimeout(write,1000);

// fs.writeFile('tt.txt',content,err=>{
//     console.log("ERRO");});

fs.readFile("tt.txt", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR");
  } else {
    console.log(data + "-2");
  }
});

write();
