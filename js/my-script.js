/*
var btnelement = document.getElementById('btn');
btnelement.onclick = function(){
  var startingvalue = Number(document.getElementById('startingNumber').value);
  var endingvalue = Number(document.getElementById('endingNumber').value);
  var result=0;
  for (var x=startingvalue;x<=endingvalue;x++){
    result+=x;
  }
  document.getElementById('result').value=result;
};*/

var redBtnElement = document.getElementById('redBtn');
redBtnElement.onclick = function () {
  var divOneElement=document.getElementById('divOne');
  divOneElement.style.backgroundColor='red';
};
var greenBtnElement = document.getElementById('greenBtn');
greenBtnElement.onclick=function(){
  var divOneElement = document.getElementById('divOne');
  divOneElement.style.backgroundColor='green';
}
var bluebtnElement = document.getElementById('blueBtn');
bluebtnElement.onclick=function(){
  var divOneElement = document.getElementById('divOne');
  divOneElement.style.backgroundColor='blue';
}