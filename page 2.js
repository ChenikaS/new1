function validateform() {
    var  a=document.form.name.value;
    var  b=document.form.password.value;
    if(a=="chenika" && b==1234){
        alert("Login successfully")
        window.open("page3.html")
    }
    else{
        alert("Wrong Username and Password, Please try it again")
    }
}
