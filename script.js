/* this function is created as a set of procedures so that it can be run later on most effectively using the addEventListener() function */
function ClickerNewuser(){
    /* sets the "new-user" <fieldset> elements in the code to a hidden state when set to "none" */
    // document.getElementById("new-user").style.display = "none";

    /* sets the "select-login" <fieldset> from disabled=false (editable) to disabled=true (non-editable) */
    document.getElementById("select-login").disabled = true;

    /* sets the "new-user" <fieldset> from disabled=false (editable) to disabled=true (non-editable) */
    document.getElementById("new-user").disabled = false;
}

/* this function is created as a set of procedures so that it can be run later on most effectively using the addEventListener() function */
function ClickerExistinguser(){
    /* sets the #new-user <fieldset> elements in the code to a hidden state when set to "none" */
    // document.getElementById("existing-user").style.display = "none";

    /* sets the "select-login" <fieldset> from disabled=false (editable) to disabled=true (non-editable) */
    document.getElementById("select-login").disabled = true;

    /* sets the "new-user" <fieldset> from disabled=false (editable) to disabled=true (non-editable) */
    document.getElementById("existing-user").disabled = false;
}

/* when the "clickNewuser" button is clicked, then it will run the function called CliCkerNewuser */
clickNewuser.addEventListener("click", ClickerNewuser);

/* when the "clickExistinguser" button is clicked, then it will run the function called CliCkerExistinguser */
clickExistinguser.addEventListener("click", ClickerExistinguser);


/* this function is created contains a singular procedure that will be run using the addEventListener() function later on */
function SubmiterNewuser(){
    /* an alert popup shows up at the top of the screen that says "Welcome" followed by the username (derived from the new user form) of the user, followed by "!" */
    alert("Welcome " + document.getElementById("uname1").value + "!");
}

/* this function is created contains a singular procedure that will be run using the addEventListener() function later on */
function SubmiterExistinguser(){
    /* an alert popup shows up at the top of the screen that says "Welcome Back" followed by the username (derived from the existing user form) of the user, followed by "!" */
    alert("Welcome Back " + document.getElementById("uname2").value + "!");
}

/* when the "submitNewuser" button is clicked, then it will run the function called SubmiterNewuser */
submitNewuser.addEventListener("click", SubmiterNewuser);

/* when the "submitExistinguser" button is clicked, then it will run the function called SubmiterExistinguser */
submitExistinguser.addEventListener("click", SubmiterExistinguser);