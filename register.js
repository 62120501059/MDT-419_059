window.onload = pageLoad;

function pageLoad() {
	var form = document.getElementById("myForm");
 	form.onsubmit = validateForm;
}

function validateForm() {
    var pass = document.forms["myForm"]["password"];
    var repass = document.forms["myForm"]["retypepassword"];
    var error=document.getElementById("errormsg");
    error.innerHTML="";
    if (pass.value == repass.value)
    {
        alert("Success");
    }
    else
    {
        error.innerHTML+="Failed to apply";
        alert("Try Again");
        return false;
    }
 //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}