/////////////// First Name Validation 
function firstNameValidate() {
  const regEx = /^[a-z][a-z '-.,]{0,20}$|^$/i;
  const firstNameBox = document.getElementById('firstName');
  const firstName = firstNameBox.value;
  const errDiv = document.getElementById("error-firstname");
  errDiv.innerHTML = ""
  const err = [];

  if (!regEx.test(firstName)) err.push("Just alphabet can be acceptable");
  if (firstName === "") err.push("Name is empty");
  if (firstName.length > 20) err.push("Less 20 character is acceptable");

  if (err.length) {
    errDiv.innerHTML = err.join("<br>");
    firstNameBox.style.border = "2px solid red";
    return false
  }
  else {
    firstNameBox.style.border = "2px solid green";
    return true
  }
}

/////////////// Last Name Validation 
function lastNameValidate() {
  const regEx = /^[a-z][a-z '-.,]{0,20}$|^$/i;
  const lastName = document.getElementById('lastName').value;
  const lastNameBox = document.getElementById('lastName')
  const errDiv = document.getElementById("error-lastname");
  errDiv.innerHTML = ""
  const err = [];

  if (!regEx.test(lastName)) err.push("Just alphabet can be acceptable");
  if (lastName === "") err.push("Name is empty");
  if (lastName.length > 20) err.push("Less 20 character is acceptable");

  if (err.length) {
    errDiv.innerHTML = err.join("<br/>");
    lastNameBox.style.border = "2px solid red";
    return false
  }
  else {
    lastNameBox.style.border = "2px solid green";
    return true
  }
}

/////////////// Phone Validation 
function phoneValidate() {
  const regEx = /^\(?(\d{2})\)?[\s-]?\d{4}[\s-]?\d{4}$/;
  const phone = document.getElementById('phone').value;
  const phoneBox = document.getElementById('phone')
  const errDiv = document.getElementById("error-phone");

  if (regEx.test(phone)) {
    // Valid phone number
    errDiv.innerHTML = "Valid -  " + phone.toString();
    phoneBox.style.border = "2px solid green";
    return true
  } else {
    // Invalid phone number
    errDiv.innerHTML = "NOT Valid -  " + phone.toString();
    phoneBox.style.border = "2px solid red";
    return false
  }
}

/////////////// Email Validation 
function emailValidate() {
  const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const email = document.getElementById('email').value;
  const emailBox = document.getElementById('email')
  const errDiv = document.getElementById("error-email");

  if (regEx.test(email)) {
    // Valid email number
    errDiv.innerHTML = "Valid -  " + email.toString();
    emailBox.style.border = "2px solid green";
    return true
  } else {
    // Invalid email number
    errDiv.innerHTML = "NOT Valid -  " + email.toString();
    emailBox.style.border = "2px solid red";
    return false
  }
}

///////////////// radio validation/////////////////////////
function radio (){
  const gender = document.querySelector("input[type='radio']:checked")
  if(gender != null){
    document.querySelector("#error-gender").innerText=""
  }else{
    document.querySelector("#error-gender").innerText="Select a gender!"
  }
}

///////////////// checkbox validation/////////////////////////
function checkBox (){
  const skill = document.querySelector("input[type='checkbox']:checked")
  if(skill == null){
    document.querySelector("#error-skill").innerText="Select at least one skill!"
  }else{
    document.querySelector("#error-skill").innerText=""
  }
}

function agree(){
  const agree = document.querySelector(".agree-terms")
if(agree == null){
  document.querySelector("#error-gender").innerText="Select Agree please!"
}else{
  document.querySelector("#error-gender").innerText=""
}
}

/////////////////// Check Password Strength
  
  let timeout;
  let strengthBadge = document.querySelector('.strengh');
  let strongPassword = new RegExp('/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/');
  let weakPassword = new RegExp('((?=.*[a-z])(?=.{8,}))');

  function StrengthChecker(pass) {
    if(strongPassword.test(pass)){
        strengthBadge.style.backgroundColor = "green";
     
    }if(weakPassword.test(pass)) {
        strengthBadge.style.backgroundColor = 'blue';
        
    } else {
        strengthBadge.style.backgroundColor = 'red';
      
    }
}
// ((?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|
password.addEventListener("input", () => {
  strengthBadge.style.display = 'block';
  clearTimeout(timeout);
  timeout = setTimeout(() => StrengthChecker(password.value), 500);
  if(password.value.length !== 0) {
      strengthBadge.style.display != 'block';
  } else {
      strengthBadge.style.display = 'none';
  }
});

//////////////// password 
function passwordValidate(passwordValue) {
  const err = [];

  if (passwordValue=="") {
    err.push("The password is requierd!")
  }
  if ( passwordValue.length < 8 ) {
    err.push("Make the password longer. ");
  } 
  // Check for mixed case
  if ( !passwordValue.match(/[a-z]/) && passwordValue.match(/[A-Z]/) ) {
    err.push("Use both lowercase and uppercase letters. ");
  } 
  // Check for numbers
  if ( !passwordValue.match(/\d/) ) {
    err.push("Include at least one number. ");
  } 
  // Check for special characters
  if (! passwordValue.match(/[^a-zA-Z\d]/) ) {
    err.push("Include at least one special character. ");
  } 
  return err
}



const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click', (e) => {
  const password = document.getElementById('password');
  const passwordValue = password.value;
  const errPasswordDiv = document.getElementById("error-password");

  const fnValid = firstNameValidate();
  const lnValid = lastNameValidate();
  const phoneValid = phoneValidate();
  const emailValid = emailValidate();
  const radioValid  = radio();
  const CheckBoxValid = checkBox();
  const agreeValid = agree();

  errPasswordDiv.innerHTML = "" ;
  const passwordErrors = passwordValidate(passwordValue);

if (passwordErrors.length !== 0) {
  e.preventDefault();
  passwordErrors.forEach(item => {
    errPasswordDiv.innerHTML += `<div>${item}</div>`;
    password.style.border="2px solid red"
  });
} else {
  password.style.border="2px solid green"
}
  if (! (fnValid && lnValid  && phoneValid && emailValid && passwordErrors && radioValid && CheckBoxValid && agreeValid)  ) {
      e.preventDefault();
    }


})
