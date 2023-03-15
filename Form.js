const signupwindow = document.getElementById("signupwindow");
const signuphead = document.getElementById("signuphead");
const loginhead = document.getElementById("loginhead");
const loginwindow = document.getElementById("loginwindow");
const loginbtn = document.getElementById("loginbtn");
const signupbtn = document.getElementById("signupbtn");

document.getElementById("loginbtn").addEventListener("click",login);
document.getElementById("signupbtn").addEventListener("click",signup);
function signup() 
{
  signupwindow.style.display = "block";
  signuphead.style.display = "block";
  loginhead.style.display = "none";
  loginwindow.style.display = "none";
  loginbtn.style.backgroundColor = "white";
  signupbtn.style.backgroundColor = "black";
  signupbtn.style.Color = "white";
}

function login()
 {
  signupwindow.style.display = "none";
  signuphead.style.display = "none";
  loginhead.style.display = "block";
  loginwindow.style.display = "block";
  signupbtn.style.backgroundColor = "white";
  loginbtn.style.backgroundColor = "black";
  loginbtn.style.Color = "white";
}

function signupsubmit()
 {
  let name = document.getElementById("Firstname").value;
  let lastname = document.getElementById("LastName").value;
  let email = document.getElementById("emailup").value;
  var vali = email.slice(-10);
  let password = document.getElementById("passwordup").value;
  let alertbox=document.getElementById("alert");
  if (name.length == 0) 
  {
    alertbox.innerHTML = "Firstname should not be empty";
  } 
  else if (name.length > 10)
   {
    alertbox.innerHTML = "Name should not contain more than 10 characters";
  } 
  else if (lastname.length == 0)
   {
    alertbox.innerHTML = "lastname should not be empty";
  }
   else if (email.length == 0)
    {
        alertbox.innerHTML = "Email should not be empty";
  }
   else if (vali != "@gmail.com") 
   {
    alertbox.innerHTML = "please enter valid email id";
  } 
  else if (password.length == 0)
   {
    alertbox.innerHTML = "please enter the password";
  } 
  else
   {
    alertbox.innerHTML = "Please Wait a minute!";
    alertbox.style.color = "green";
  }
}
