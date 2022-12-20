let validation = ()=>{

    let name =document.getElementById("name").value;
    let mail =document.getElementById("mail").value;
    let mno =document.getElementById("mno").value;
    let add =document.getElementById("add").value;
    let pass =document.getElementById("pass").value;
    
    if(name == ""){
        console.log(document.getElementById("name-p").innerHTML = "Username is Required");
        return false;
    } else {
        console.log((document.getElementById("name-p").innerHTML = ""));
    }

    if(mail == ""){
        console.log(document.getElementById("mail-p").innerHTML = "Email Id is Required");
        return false;
    }
    // regex for email validation
    else if(!mail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        console.log(document.getElementById("mail-p").innerHTML = "Email Id is Invalid");
        return false;
    }   
    else {
        console.log((document.getElementById("mail-p").innerHTML = ""));
    }

    if(mno == ""){
        console.log(document.getElementById("mno-p").innerHTML = "Mobile No is Required");
        return false;
    }
    // isNan() function is used to check whether the value is a number or not, if not then it will return true
    else if(isNaN(mno)){
        console.log(document.getElementById("mno-p").innerHTML = "Mobile No is Invalid");
        return false;
    }
    else {
        console.log((document.getElementById("mno-p").innerHTML = ""));
    }

    if(add == ""){
        console.log(document.getElementById("add-p").innerHTML = "Address is Required");
        return false;
    }else {
        console.log((document.getElementById("add-p").innerHTML = ""));
    }

    if(pass == ""){
        console.log(document.getElementById("pass-p").innerHTML = "Password is Required");
        return false;
    }else {
        console.log((document.getElementById("pass-p").innerHTML = ""));
        window.alert("You Have Successfully Created a Account");
    }
    // else if
    // {
    //     window.alert("You Have Successfully Created a Account");
    // }
}