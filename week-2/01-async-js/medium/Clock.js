

///CLOCK ASIIGNMENT - 1
// let h=document.querySelector('h2');
// function showTime(){
//   let today=new Date();
//   h.innerText=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// }
// setInterval(showTime,1000);

///CLOCK ASIIGNMENT - 2
let h=document.querySelector('h2');
function showTime(){
  let today=new Date();
  let n = today.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
    second:'2-digit'
});
  h.innerText=n;
}
setInterval(showTime,1000);
