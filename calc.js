var markInputs=document.getElementById("texts");
var finalMark=document.getElementById("Final mark");
var total=document.getElementById("subjects");
var numSubs=0;
var total1=0;


function addMarks(){
  
  for(var i=0;i<numSubs;i++){
    var input=document.getElementById(i);
    markInputs.removeChild(input);
  }
  
  numSubs=0;
  
  for(var i=0;i<total.value;i++){
    var input = document.createElement("input");
    input.type = "number";
    input.name="mark";
    input.id=numSubs;
    markInputs.appendChild(input);
    numSubs+=1;
  }


}
function calculate(){
  
  
  var final=document.getElementById('output')
  finalMark.removeChild(final);
  
  
  var flag=-1;
  
  for(var i=0;i<numSubs;i++){
    var texts=document.getElementById(i);
    total1+=parseFloat(texts.value);
    if(parseFloat(texts.value)>100 || parseFloat(texts.value)<0 ){
      flag=0;
    }
  }
  outOfTen=parseInt(total1/numSubs);
  var gp;
  switch(parseInt((outOfTen/10))*10){
    case 100:
    case 90:
      gp='10';
      break;
    case 80:
      gp='9';
      break;
    case 70:
      gp='8';
      break;
    case 60:
      gp='7';
      break;
    case 50:
      gp='6';
      break;

    default:
      gp='F/N';
      break;
  }
  if (flag==0){
    gp='invalid';
  }
  console.log(gp);
  var final=document.createElement("P");
  final.innerText=gp;
  final.id='output';
  finalMark.appendChild(final);
  total1=0;


}