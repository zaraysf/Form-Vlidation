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
//////////////////// password 
function passwordValidate(passwordValue) {
  const err = [];

  if (passwordValue=="") {
    err.push("The password is requierd!")
  }
  if (passwordValue.length<8) {
    err.push("The password must be more 8 characters")
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
  const passwordErrors = passwordValidate(passwordValue);

  errPasswordDiv.innerHTML = "" ;


// ////////////////// Password Visibility
// const togglePassword = document.querySelector("#togglePassword");
// const closeEye = document.querySelector("#closeEye");
// const openEye = document.querySelector("#openEye");
// let isPassVisible = false;

//   togglePassword.addEventListener("click", ()=> {

//     if (!isPassVisible) {
//       //visible pass
//       password.type = "text";
//       closeEye.classList.add('hide');
//       openEye.classList.remove('hide');
//     } else {
//       //invisible pass
//       password.type = "password";
//       closeEye.classList.remove('hide');
//       openEye.classList.add('hide');
//     }
//     isPassVisible = !isPassVisible;
// });


if (passwordErrors.length!=0) {
  e.preventDefault();
  passwordErrors.forEach(item => {
    errPasswordDiv.innerHTML += `<div>${item}</div>`;
    password.style.border="2px solid red"
  });
} else {
  password.style.border="2px solid green"
}
  if (! (fnValid && lnValid  && phoneValid && emailValid)  ) {
      e.preventDefault();
    }


///////////////// radio validation/////////////////////////

const gender = document.querySelector("input[type='radio']:checked")
if(gender==null){
  document.querySelector("#error-gender").innerText="Select a gender!"
}else{
  document.querySelector("#error-gender").innerText=""
}

///////////////// checkbox validation/////////////////////////
const skill = document.querySelector("input[type='checkbox']:checked")
if(skill==null){
  document.querySelector("#error-skill").innerText="Select at least one skill!"
}else{
  document.querySelector("#error-skill").innerText=""
}
})


////////////////// Password Visibility
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const closeEye = document.querySelector("#closeEye");
const openEye = document.querySelector("#openEye");

openEye.addEventListener("click", (e) => {

  console.log(e)
  // openEye.style.display = "none";
  // closeEye.style.display = "block";

  // password.type = "text";
});

// closeEye.addEventListener("click", () => {
//   closeEye.style.display = "none";
//   openEye.style.display = "block";

//   password.type = "password";
// });






// let isPassVisible = false;

//   togglePassword.addEventListener("click", ()=> {

//     if (!isPassVisible) {
//       //visible pass
//       password.type = "text";
//       closeEye.classList.add('hide');
//       openEye.classList.remove('hide');
//     } else {
//       //invisible pass
//       password.type = "password";
//       closeEye.classList.remove('hide');
//       openEye.classList.add('hide');
//     }
//     isPassVisible = !isPassVisible;
// });

// eye.addEventListener("click", function(){
//   this.classList.toggle("fa-eye-slash")
//   const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
//   passwordInput.setAttribute("type", type)
// })