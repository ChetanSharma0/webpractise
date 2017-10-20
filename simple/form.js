function validateForm()
{
    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var mobileno=document.getElementById("mobileno").value;
    var email = document.getElementById("mail").value;
  var emailreg=/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;





    if (firstname !="" && mobileno !="" && email !="")
        {
             document.getElementById("firstname").style.borderColor="#2e2e90";
            document.getElementById("mobileno").style.borderColor="blue";
            
            if (email.match(emailreg))
                {
                       document.getElementById("mail").style.borderColor="blue";
            
                    
                }else{
                    
                  document.getElementById("mail").style.borderColor="red";  
                }
           
        }else{
            document.getElementById("firstname").style.borderColor="#cb4c4c";
            document.getElementById("mobileno").style.borderColor="#cb4c4c";
            document.getElementById("mail").style.borderColor="red";  
                
        }
    
    
}