
function unamedisplay()
{
    var uname=document.getElementById("username");
    console.log(uname)
    var check=2;
    
    while(check=1)
    {
    if(uname.value.length<4 || uname.value.trim==" ")
    {
     check=2;
     if(uname.value.length<2)
        {
            document.getElementById("NameWarning1").style="color:red; visibility:visible;";
            document.getElementById("NameWarning2").style="color:red; visibility:hidden;";
        }  
        else
        {
            document.getElementById("NameWarning1").style="color:red; visibility:hidden;";
            document.getElementById("NameWarning2").style="color:red ; visibility:visible;";
        }
        return uname.style="border-color:red; visibility:visible;" 
        
    }
    else
    {
        check=1;
        document.getElementById("NameWarning1").style="color:red; visibility:hidden;";
        document.getElementById("NameWarning2").style="color:red; visibility:hidden;";
        return uname.style="border-color:black;"
     }
}
}


function fnamedisplay()
{
var fname=document.getElementById("fathername");
check=2;
    
    while(check=1)
    {
    if(fname.value.length<4 || fname.value.trim==" ")
    {
     check=2;
     if(fname.value.length<2)
        {
            document.getElementById("FatherNameWarning1").style="color:red; visibility:visible;";
            document.getElementById("FatherNameWarning2").style="color:red; visibility:hidden;";
        }  
        else
        {
            document.getElementById("FatherNameWarning1").style="color:red; visibility:hidden;";
            document.getElementById("FatherNameWarning2").style="color:red ; visibility:visible;";
        }
        return fname.style="border-color:red; visibility:visible;"   
    }
    else
    {
        check=1;
        document.getElementById("FatherNameWarning1").style="color:red; visibility:hidden;";
        document.getElementById("FatherNameWarning2").style="color:red; visibility:hidden;";
        return fname.style="border-color:black;"
     }
}
}






function mailDisplay()
{
    var mail=document.getElementById("email");
    var regx=/[@syncfusion,@gmail,@outllok].com/;
    check=2;
        
        while(check=1)
        {
        if(!regx.test(mail.value))
        {
         check=2;
         if(mail.value.length<2)
        {
            document.getElementById("mailWarning1").style="color:red; visibility:visible;";
            document.getElementById("mailWarning2").style="color:red; visibility:hidden;";
        }  
        else
        {
            document.getElementById("mailWarning1").style="color:red; visibility:hidden;";
            document.getElementById("mailWarning2").style="color:red ; visibility:visible;";
        }
            return mail.style="border-color:red; visibility:visible;"   
        }
        else
        {
            check=1;
            document.getElementById("mailWarning1").style="color:red; visibility:hidden;";
            document.getElementById("mailWarning2").style="color:red; visibility:hidden;";
            return mail.style="border-color:black;"
         }
    }
}

function DOBDisplay()
{
    var DOB=document.getElementById("DOB");
    var regx=//;
    check=2;
        
        while(check=1)
        {
        if(!regx.test(mail.value))
        {
         check=2;
            return mail.style="border-color:red; visibility:visible;"   
        }
        else
        {
            check=1;
            return mail.style="border-color:black;"
         }
    }
}
function MobileNumberDisplay()
{
    var mobileNumber=document.getElementById("MobileNumber");
    var regx=/[7-9]\d{9}/;
    check=2;
        
        while(check=1)
        {
        if(!regx.test(mobileNumber.value))
        {
         check=2;
            return mobileNumber.style="border-color:red; visibility:visible;"   
        }
        else
        {
            check=1;
            return mobileNumber.style="border-color:black;"
         }
    }
}
function Address1display()
{
    var address1=document.getElementById("Address1");
    
    var check=2;
    
    while(check=1)
    {
    if(address1.value.length<2 || address1.value.trim==" ")
    {
     check=2;
        return address1.style="border-color:red; visibility:visible;"   
    }
    else
    {
        check=1;
        return address1.style="border-color:black;"
     }
}
}

function Address2display()
{
    var address2=document.getElementById("Address2");
    
    var check=2;
    
    while(check=1)
    {
    if(address2.value.length<2 || address2.value.trim==" ")
    {
     check=2;
        return address2.style="border-color:red; visibility:visible;"   
    }
    else
    {
        check=1;
        return address2.style="border-color:black;"
     }
}
}
function Address3display()
{
    var address3=document.getElementById("Address3");
    
    var check=2;
    
    while(check=1)
    {
    if(address3.value.length<2 || address3.value.trim==" ")
    {
     check=2;
        return address3.style="border-color:red; visibility:visible;"   
    }
    else
    {
        check=1;
        return address3.style="border-color:black;"
     }
}
}
function PINDisplay()
{
    var PINNumber=document.getElementById("PINCode");
    var regx=/[6]\d{5}/;
    check=2;
        
        while(check=1)
        {
        if(!regx.test(PINNumber.value))
        {
         check=2;
            return PINNumber.style="border-color:red; visibility:visible;"   
        }
        else
        {
            check=1;
            return PINNumber.style="border-color:black;"
         }
    }
}
function EqualAddressDisplay()
{
    document.getElementById("PermanentAddress1").value=document.getElementById("Address1").value;
    document.getElementById("PermanentAddress2").value=document.getElementById("Address2").value;
    document.getElementById("PermanentAddress3").value=document.getElementById("Address3").value;
    document.getElementById("PermanentAddress4").value=document.getElementById("Address4").value;
    document.getElementById("PermanentPINCode").value=document.getElementById("PINCode").value;
}

function photoUploads()
{
    return document.getElementById("photoWarning").style.visibility="visible";
}