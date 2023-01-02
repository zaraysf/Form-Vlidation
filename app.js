function validateForm() {
    let x = document.forms["myForm"]["firtName"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }