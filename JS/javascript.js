console.clear();

var Firstname=document.getElementById("firstname");
var Lastname=document.getElementById("lastname");
var Email=document.getElementById("email");
var Password=document.getElementById("password");
var pattern=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
var Submit=document.getElementById("submit-btn");
var Image1=document.getElementById("image1");
var Image2=document.getElementById("image2");
var Image3=document.getElementById("image3");
var Image4=document.getElementById("image4");
var Error1=document.getElementById("error1");
var Error2=document.getElementById("error2");
var Error3=document.getElementById("error3");
var Error4=document.getElementById("error4");


Submit.onclick=function(){
    console.log("1");
    if(!Email.value.match(pattern)){
        Error3.style.display="block";
        Image3.style.display="block";
        console.log("2");
    }else{

    }
     if(Firstname.value===""){
        console.log("5");
        Error1.style.display="block";
        Image1.style.display="block";
    }else{

    }
        if(Lastname.value===""){
        Error2.style.display="block";
        Image2.style.display="block";
    }else{

    }
    if(Password.value===""){
        Error4.style.display="block";
        Image4.style.display="block";
    }
    else{

    }

}



