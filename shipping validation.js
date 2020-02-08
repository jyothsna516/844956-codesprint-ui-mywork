/*var a=document.frm.inr;
function Validateform()
{
    var a=document.frm.inr;
    if(inr==""){
        alert
    }
}
var b=document.frm.paisa;
function Validateform()
{
    var a=document.frm.inr;
    if(inr==""){
        alert
    }
}
var c=document.frm.fname;
function Validateform()
{
    var a=document.frm.fname;
    if(fname==""){
        alert
    }
}
    }
}*/
function ValidateForm(frm) 
{
    //var phoneno=/^\d{10}$/;
    
    if (frm.t1.value == "") { alert('Name is required.'); frm.Name.focus(); return false; }
    if(frm.t2.value>=0||frm.t2.value<=100){alert("please enter the range between 0 and 100");frm.t2.focus();return false;}
    if(frm.fname.value>'a'||frm.fname.value<'z'||frm.fname.value >'A'||frm.fname.value<'Z'){alert("please enter the alphabets only");frm.t3.focus();return false;}
    if(frm.t4.value>'a'||frm.t4.value<'z'||frm.t4.value >'A'||frm.t4.value<'Z'){alert("please enter the alphabets only");frm.t3.focus();return false;}
    if (frm.sa.value == "") { alert('enter the street address.'); frm.sa.focus(); return false; }
    if (frm.t6.value == "") { alert('city is required.'); frm.t6.focus(); return false; }
    if (frm.t7.value == "") { alert('state is required.'); frm.t7.focus(); return false; }
    if (frm.t8.value == "") { alert('select the country '); frm.t8.focus(); return false; }
    if (frm.t9.value<6||frm.t9.value>6) { alert('enter the pincode in 6 digit only '); frm.t9.focus(); return false; }
        if(frm.t10.value>'a'||frm.t10.value<'z'||frm.t10.value >'A'||frm.t10.value<'Z'){alert("please enter the alphabets only");frm.t10.focus();return false;}
    if(frm.t11.value>'a'||frm.t11.value<'z'||frm.t11.value >'A'||frm.t11.value<'Z'){alert("please enter the alphabets only");frm.t11.focus();return false;
   // if ((frm.t12.value.match(phoneno)) {
     //  alert("sucess")  }else {alert("please enter the number upto 10 digits");frm.t12.focus();return false;}
    if (frm.t12.value == "") { alert('Email address is required.'); frm.FromEmailAddress.focus(); return false; }
    if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) 
    { alert('Please enter a valid email address.'); frm.FromEmailAddress.focus(); return false; }
}
}
    