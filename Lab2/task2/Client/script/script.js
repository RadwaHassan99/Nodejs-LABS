
function highlightInput(elem){
    elem.style.background="rgb(131, 235, 249)";
}

function RemoveHighlight(elem){
    elem.style.background="white";
}

var Data ={};
setInterval( function validateData(){
    var uname=document.getElementById("uname").value;
    var pswd=document.getElementById("pswd").value;
    var addr = document.getElementById("address").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;

    var userR=/^[A-Za-z][A-Za-z0-9_]{4,14}$/;
    if(userR.test(uname)){
        document.getElementById("msg1").style.visibility = "hidden";
        Data.name = uname;
    }

    else{
        document.getElementById("msg1").style.visibility = "visible";
        console.log("invalid");
    }

    var mailR = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mailR.test(email)){
        document.getElementById("msg2").style.visibility = "hidden";
        Data.mail = email;
    }
    else{
        document.getElementById("msg2").style.visibility = "visible";
    }

    var pswdR = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(pswdR.test(pswd)){
        document.getElementById("msg5").style.visibility = "hidden";
        Data.pass = pswd;
    }

    else{
        document.getElementById("msg5").style.visibility = "visible";
        console.log("invalid");
    }

    var addrR = /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;
    //3344 W Alameda Avenue, Lakewood, CO 80222
    if(addrR.test(addr)){
        console.log("valid");
        document.getElementById("msg3").style.visibility = "hidden";
        Data.addr = addr;
    }
    else{
        document.getElementById("msg3").style.visibility = "visible";
    }

    var mobR=/^\d{11}$/;
    if(mobR.test(mobile)){
        console.log("valid");
        document.getElementById("msg4").style.visibility = "hidden";
        Data.mobile = mobile;
    }

    else{
        document.getElementById("msg4").style.visibility = "visible";
    }
},1000);

/*function onFormSubmit() {
    alert("username: "+Data.name+"\n"+"email: "+Data.mail+"\n"+"password: "+Data.pass+"\n"+"address:"+Data.addr+"\n"+"mobile:"+Data.mobile);	
	return false;
}*/

function submitHavor(){
    var submit=document.getElementById("submit");
    submit.style.cursor="pointer";
}

function submitAlert(){
    
}








