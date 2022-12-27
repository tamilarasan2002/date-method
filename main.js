var a=new Date();
var b=a.setTime(parseInt(prompt("Enter the time")));
if(b>6 && b<12){
  console.log("Morning")
}
else if(b>12 && b<16){
  console.log("Afternoon")
}
else if(b>16 && b<18){
  console.log("Evening")
}
else{
  console.log("Night")
}

