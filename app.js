function firstNameValidate(){
  const regEx =  new RegExp (/^[a-z][a-z '-.,]{0,20}$|^$/i);
  const firstName = document.getElementById('firstName').value;

  const errDiv = document.getElementById("error-firstname");
  errDiv.innerHTML = ""
  const err = []

        if (regEx.test(firstName)) err.push ("Just alphabet can be acceptable");
        if (firstName == "") err.push("Name is empty");
        if (firstName > 20) err.push("Less 20 character is acceptable");

        if (err.length) {
        errDiv.innerHTML = err.join("<br/>");
      }
      
} 


const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click' , (e)=>{
e.preventDefault();
firstNameValidate();
})

      
