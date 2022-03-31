window.onload = lStorage;

function lStorage(){
    var formHandle = document.forms.infoForm;
var wel = document.getElementById("newMsgBox");
var del = document.getElementById("btnDel");

var userName = localStorage.getItem("Name");
var userColor = localStorage.getItem("Color");




document.body.style.backgroundColor = userColor;

if(userName === null){
    wel.innerHTML = "Welcome!";
}else{
    wel.innerHTML = "Welcome, "+userName+"!";
}


function getinfo(){
    
    var al = formHandle.f_name;
    var inputcolor = formHandle.f_color;
    localStorage.setItem("Name", al.value );
    localStorage.setItem("Color", inputcolor.value);
    
    console.log(inputcolor.value);
    console.log(al.value);

// return false;
}
formHandle.onsubmit = getinfo;

function sClear()
{
    localStorage.removeItem("Name");
    localStorage.removeItem("Color");
    location.reload();
    // return false;
}
del.onclick = sClear;


}