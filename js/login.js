// step -1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
// step-2: get the email address inside the email input field
// always remember to use .value to get text from an input field

const emailFeild = document.getElementById('user-email');
const email = emailFeild.value;

// step-3: get password
// 3.a : set on the html element
//  3.b: get the element
// 3.c : get the value from the element
const passField = document.getElementById('user-password');
const password =   passField.value;
// Danger: DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE .boro hole ata korbo 
// step-4: verify email and password and check whether valid user or not
if(email === 'keya05866@gmail.com' && password === 'secret'){
    window.location.href = 'bank.html';
}
    else{
      alert('Please Enter Correct Password')
    }

});

