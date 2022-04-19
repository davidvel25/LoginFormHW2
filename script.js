// document.getElementById("select-login").disabled = false;
// document.getElementById("new-user").disabled = true;
// document.getElementById("existing-user").disabled = true;

function ClickerNewuser(){
    document.getElementById("new-user").style.display = "block";
    document.getElementById("select-login").disabled = true;
    document.getElementById("new-user").disabled = false;
}

function ClickerExistinguser(){
    document.getElementById("existing-user").style.display = "block";
    document.getElementById("select-login").disabled = true;
    document.getElementById("existing-user").disabled = false;
}

clickNewuser.addEventListener("click", ClickerNewuser);
clickExistinguser.addEventListener("click", ClickerExistinguser);



function SubmiterNewuser(){
    alert("Welcome " + document.getElementById("uname1").value + "!");
}

function SubmiterExistinguser(){
    alert("Welcome Back " + document.getElementById("uname2").value + "!");
}

submitNewuser.addEventListener("click", SubmiterNewuser);
submitExistinguser.addEventListener("click", SubmiterExistinguser);


// document.getElementById("select-login").addEventListener("click", disable);
// document.getElementById("new-user").addEventListener("click", disable);
// document.getElementById("existing-user").addEventListener("click", disable);
