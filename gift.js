function changeDiv() {

	document.getElementById("hide").style.display="block";

}

function changeDiv1() {
	document.getElementById("hide1").style.display="block";

  myVar = setTimeout(alertFunc, 1000);
   myVar1 = setTimeout(alertFunc2, 1500);
   myVar2 = setTimeout(alertFunc3, 2000);

}
function alertFunc() {
  document.getElementById("con").innerHTML="&#x1F635;";
}
function alertFunc2() {
  document.getElementById("con2").innerHTML="&#x1F910;";
}
function alertFunc3() {
	alert("Cool down...cool down...!!!");
	// toLocaleTimeString()="This is last time...I'm sure it will work this time...please <button type="button" class="btn btn-warning btn-lg"> <a href="index1.html"><b> Press </b></button></a> for last time";
	// document.getElementById("co3").innerHTML = d.toLocaleTimeString();
	// document.getElementById("con3").innerHTML="This is last time...I'm sure it will work this time...please <button type="button" class="btn btn-warning btn-lg"> <a href="index1.html"><b> Press </b></button></a> for last time";

}
