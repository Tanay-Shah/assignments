// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



 let a = 0;

 function count() {
   a++;
   console.log(a);
   setTimeout(count,1000);
 }
count();


