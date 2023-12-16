// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->

let content = "HIIIIIIIIIIII";
const write = () => {
  fs.writeFile("tt.txt", content, (err) => {
    console.log("ERRO");
  });
};
// setTimeout(write,1000);

// fs.writeFile('tt.txt',content,err=>{
//     console.log("ERRO");});
