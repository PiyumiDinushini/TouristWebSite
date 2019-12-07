function bigImg(image) {
  image.style.height = "750px";
  image.style.width = "550px";
}

function normalImg(image) {
  image.style.height = "700px";
  image.style.width = "500px";
}

function big1(image1) {
  image1.style.height = "95px";
  image1.style.width = "350px";
}

function normal1(image1) {
  image1.style.height = "90px";
  image1.style.width = "300px";
}

function big2(image2) {
  image2.style.height = "80px";
  image2.style.width = "350px";
}

function normal2(image2) {
  image2.style.height = "75px";
  image2.style.width = "300px";
}
function alertagree(){
 window.alert("Thanks for agree with our Booking Conditions...");
}
function bigImgpay(image3) {
  image3.style.height = "750px";
  image3.style.width = "62%";
}

function normalImgpay(image3) {
  image3.style.height = "600px";
  image3.style.width = "60%";
}


var name=document.getElementById('name');
var email=document.getElementById('email');
var contactno=document.getElementById('contactno');
var destination=document.getElementById('destination');
var message=document.getElementById('message');
var button=document.querySelector('.form-submit');


function checkInput(){
	if(name.value !=="" && email.value !=="" && contactno.value !=="" && destination.value !=="" && message.value !==""){
		button.style.backgroundColor="#6A5ACD";
		button.disabled=false;
	}
	else{
		button.style.backgroundColor="#3979695";
		button.disabled=true;
	}
}
function showalert(){
	if(name.value !=="" && email.value !=="" && contactno.value !=="" && destination.value !=="" && message.value !==""){
		alert("Thank you for joining with us");
		
		
	}

}
function big(imagex) {
  imagex.style.height = "300px";
  imagex.style.width = "350px";
}

function normal(imagex) {
  imagex.style.height = "200px";
  imagex.style.width = "250px";
}
























