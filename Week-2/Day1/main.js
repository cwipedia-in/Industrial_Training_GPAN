
function create(){
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;

    let branch = document.getElementById("branch").value;

    let clg = document.getElementById("clg").value;


    document.write(name + "<br/> " + email + " <br/> " + password + "<br/>  "+address + "<br/>  " + branch+ "<br/>  " + clg);
}