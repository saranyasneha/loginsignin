const forms = document.querySelector(".forms"),

links = document.querySelectorAll(".link");

links.forEach(link=> {
link.addEventListener("click", e => {
 e.preventDefault(); 
 forms.classList.toggle("show-signup");
})
})

const logi=document.getElementById("log");
logi.addEventListener("click",loginfunction);

function loginfunction(){
  var email=document.getElementById("email").value;
  var pword=document.getElementById("pwd").value;
  

if(!email||!pword){
  alert("please fill the details!!")
}

if(email&&pword){
  alert("login Success!!")
}
}

const signup=document.getElementById("sign");
signup.addEventListener("click",signupfunction);

function signupfunction(){
  var userName=document.getElementById("username").value;
  var createPwd=document.getElementById("createpwd").value;
  var confirmPwd=document.getElementById("confirmpwd").value;
  

if(!userName||!createPwd||!confirmPwd){
  alert("please fill the details!!")
}
if(userName&&createPwd&&confirmPwd){
  alert("Account has been created successfully!!")
}
}

