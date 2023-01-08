function firstNameValidate(){
  const regEx = /^[a-z][a-z '-.,]{0,20}$|^$/i;
  const firstName = document.getElementById('firstName').value;
if((firstName==""))
 {
   document.getElementById('error-firstname').innerHTML = "First name should not be empty";
  // registerationform.firstName.focus();
  // return(false);
 }else if (firstName > 20){
    document.getElementById('error-firstname').innerText = "The name should be less than 20 character!"
      }
  else if (regEx.test(firstName)){
        document.getElementById('error-firstname').innerText = "Just alphabet can be acceptable"
      }
  else
  {
  return(true);
  }
}

function lastNameValidate(){
  const regEx = /^[a-z][a-z '-.,]{0,20}$|^$/i;
  const lastName = document.getElementById('lastName').value;
if((lastName == ""))
 {
   document.getElementById('error-lastname').innerHTML = "Last name should not be empty";
  // registerationform.firstName.focus();
  // return(false);
 }else if (lastName > 20){
    document.getElementById('error-lastname').innerText = "The name should be less than 20 character!"
      }
  else if (regEx.test(lastName)){
        document.getElementById('error-lastname').innerText = "Just alphabet can be acceptable"
      }
  else
  {
  return(true);
  }
}

const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click' , (e)=>{
e.preventDefault();
firstNameValidate();
lastNameValidate();
console.log(e.defaultPrevented());
})


