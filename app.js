/////////////// First Name Validation 
function firstNameValidate(){
  const regEx =  /^[a-z][a-z '-.,]{0,20}$|^$/i;
  const firstName = document.getElementById('firstName').value;
  const firstNameBox = document.getElementById('firstName')
  const errDiv = document.getElementById("error-firstname");
  errDiv.innerHTML = ""
  const err = [];

        if (!regEx.test(firstName)) err.push ("Just alphabet can be acceptable");
        if (firstName === "") err.push("Name is empty");
        if (firstName.length > 20) err.push("Less 20 character is acceptable");

        if (err.length) {
        errDiv.innerHTML = err.join("<br/>");
        firstNameBox.style.border = "2px solid red";
      } 
      else{
        firstNameBox.style.border = "2px solid green";
      }     
} 

/////////////// Last Name Validation 
function lastNameValidate(){
  const regEx =  /^[a-z][a-z '-.,]{0,20}$|^$/i;
  const lastName = document.getElementById('lastName').value;
  const lastNameBox = document.getElementById('lastName')
  const errDiv = document.getElementById("error-lastname");
  errDiv.innerHTML = ""
  const err = [];

        if (!regEx.test(lastName)) err.push ("Just alphabet can be acceptable");
        if (lastName === "") err.push("Name is empty");
        if (lastName.length > 20) err.push("Less 20 character is acceptable");

        if (err.length) {
        errDiv.innerHTML = err.join("<br/>");
        lastNameBox.style.border = "2px solid red";
      } 
      else{
        lastNameBox.style.border = "2px solid green";
      }     
} 

/////////////// Phone Validation 
function phoneValidate(){
  const regEx =  /^\(?(\d{2})\)?[\s-]?\d{4}[\s-]?\d{4}$/;
  const phone = document.getElementById('phone').value;
  const phoneBox = document.getElementById('phone')
  const errDiv = document.getElementById("error-phone");
  
          if (regEx.test(phone)) {
            // Valid phone number
            errDiv.innerHTML = "Valid -  " + phone.toString();
            phoneBox.style.border = "2px solid green";
        } else {
            // Invalid phone number
            errDiv.innerHTML = "NOT Valid -  " + phone.toString();
            phoneBox.style.border = "2px solid red";
        }
}

/////////////// Email Validation 
function emailValidate(){
  const regEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const email = document.getElementById('email').value;
  const emailBox = document.getElementById('email')
  const errDiv = document.getElementById("error-email");
  
          if (regEx.test(email)) {
            // Valid email number
            errDiv.innerHTML = "Valid -  " + email.toString();
            emailBox.style.border = "2px solid green";
        } else {
            // Invalid email number
            errDiv.innerHTML = "NOT Valid -  " + email.toString();
            emailBox.style.border = "2px solid red";
        }
}




const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click' , (e)=>{
e.preventDefault();
firstNameValidate();
lastNameValidate();
phoneValidate();
emailValidate();
})

      
