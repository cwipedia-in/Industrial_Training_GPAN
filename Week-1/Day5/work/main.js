let username;
let password;


function login(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
console.log(username, password);
    if((username=="shivam") && (password=="123")){
        alert("Login Success")
    }
    else{
        alert("Login Failed");
    }
}