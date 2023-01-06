function validateFirstName(){

var firstName=document.getElementById('firstName');
var stringf = document.getElementById('firstName').value;
if (firstName.value=="") {
     alert("firstName name must be filled out");
     return false;
    }
else if (document.getElementById('firstName').value.length > 20){
        alert("firstName name cannot be more than 35 characters");
        return false;
    }
    else if (/^[a-z][a-z '-.,]{0,20}$|^$/i.test( stringf )){

    }
  }

const btnSubmit = document.getElementById(submit);
btnSubmit.addEventListener('click' , (e)=>{
  alert('Sorry! you cannot check this checkbox because of the preventDefault.');
  e.preventDefault();
validateFirstName();
console.log(validateFirstName());
})



