var nameerror=document.getElementById('name-error');
var emailerror=document.getElementById('email-error');
var placeerror=document.getElementById('place-error');
var numbererror=document.getElementById('number-error');
var messageerror=document.getElementById('message-error');
var submiterror=document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('name').value;

    if(name.length==0 ){
        nameerror.innerHTML='Name is required';
        return false;
    }
    
    nameerror.innerHTML='valid';
    return true;
}
function validateEmail(){
    var email=document.getElementById('email').value;
    if(email.length==0){
        emailerror.innerHTML='Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML='Please enter valid email';
        return false;
    }
    emailerror.innerHTML='valid';
    return true;

}
function validatePlace(){
    var place=document.getElementById('place').value;
    if(place.length==0 ){
        placeerror.innerHTML='Place is required';
        return false;
    }
    placeerror.innerHTML='valid';
    return true;
}
function validateNumber(){
    var number=document.getElementById('number').value;

    if(number.length==0){
        numbererror.innerHTML='Phone number is required';
        return false;
    }
    if(number.length!=10){
        numbererror.innerHTML='Number should be 10 digit';
        return false;
        }
        numbererror.innerHTML='valid';
        return true;
   }
function validateMessage(){
    var message=document.getElementById('message').value;
    var required=30;
    var left=required - message.length;
    if(left>0){
        messageerror.innerHTML=left+' more characters required'
        return false;
    }
    messageerror.innerHTML='valid';
    return true;
}
function validateForm(){
 
   if(!validateName()||!validateEmail()||!validateNumber()||!validateMessage()){
   submiterror.innerHTML='Please fix error to submit';
    return false;
   }
   else{
    alert('submited');
    return true;
   }
}

 
