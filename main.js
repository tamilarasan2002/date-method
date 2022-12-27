var a=new Date();
var b=a.setTime(parseInt(prompt("Enter the time")));
if(b>=0 && b<=5){
  console.log("Early Morning")
}
else if(b>=6 && b<=11){
  console.log("Morning")
}
else if(b>=12 && b<=15){
  console.log("Afternoon")
}
else if(b>=16 && b<=18){
  console.log("Evening")
}
else if(b>=19 && b<=24){
  console.log("Night")
}
else{
  console.log("Not a time")
}

