function getFormvalue() {
    // Get the form element
    let form = document.getElementById("form1");

    // Get the values of the first name and last name fields
    let firstName = form.elements.fname.value;
    let lastName = form.elements.lname.value;

    // Concatenate and display the first and last name in an alert
    alert(firstName + " " + lastName);
}
