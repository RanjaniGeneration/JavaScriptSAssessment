function validatefields()
    {
   let username=document.getElementById("uname").value;
   let pwd1=document.getElementById("pass").value;
   let cpwd1=document.getElementById("cpass").value;
   let mymail=document.getElementById("email").value;
   let mobile1=document.getElementById("mob").value;
     let dobinput=document.getElementById("dob");
     let dob1 = dobinput.value;
     var currentDate = new Date();
     let ctry=document.getElementById("ctry").value;
     let username_regex = /^[a-zA-Z0-9]{5,}$/;
     let password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
     let username_error = document.getElementById("username_error");
     let password_error = document.getElementById("password_error");
     let cpassword_error = document.getElementById("cpassword_error");
//validate username
     if (username === "null" || username === "")
            {
         console.log();
               alert( "Enter valid username");
               return false;
            }
   if (!username_regex.test(username)) {
        username_error.innerHTML = "Username must be at least 5 characters and contain only letters and numbers";
         return false;
       } else {
           username_error.innerHTML = "";
         }
//Validate password
if (pwd1.length<8)
     {
      password_error.innerHTML = "Password must be at least 8 characters";
         return false;
     }
if (!password_regex.test(pwd1))
     {
         password_error.innerHTML = "Password should include one lowercase letter, one uppercase letter, and one digit";
         return false;
     }
      else {
               password_error.innerHTML = "";
         }
//Validate confirm password
if (pwd1 !== cpwd1)
      {
         alert( "Both the passwords must be same")
         return false;
      }
//Validate Email
let attherate=mymail.indexOf("@");
let atthedot=mymail.lastIndexOf(".");
if (attherate<1 || atthedot<attherate+3 || atthedot>=mymail.length)
      {
         alert( "enter the correct email");
         return false;
      }
//validate DOB
let date = new Date(dob1);
if (isNaN(date))
  {
      alert("Please enter a valid date.");
      return false;
  }
     if (date.getTime() > Date.now())
            {
               alert( "Date of Birth cannot be in future");
               return false;
            }
//validate mobile
if (mobile1.length!=10)
{
alert( "Enter the correct 10 digits number");
return false;
}
}