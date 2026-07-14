const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", function(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name === "" || email === ""){
msg.innerText = "Please fill all fields";
}
else{
msg.innerText = "Thank you " + name + "! I will contact you soon.";
}

});