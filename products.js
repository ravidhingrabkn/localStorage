//LAB 9-DATA STORAGE: PRODUCTS PAGE
//alert("products");//DELETE AFTER CONFIRMING CONNECTION
window.onload = locStorage;

function locStorage(){
    var msg = document.getElementById("newMsgBox");
    var inputName = localStorage.getItem("Name");
    var inColor = localStorage.getItem("Color");

    document.body.style.backgroundColor = inColor;
    msg.innerHTML = "Welcome, "+inputName+"!";
}