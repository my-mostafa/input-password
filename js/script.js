 var $ = document;
 function poiid(poiname) {
   return $.getElementById(poiname);
 }

 function poiass(spoiname) {
   return $.getElementsByClassName(spoiname);
   
 }

 var togglePassword = poiass("toggle-password");
 var passwordField = poiid("password-field");

 togglePassword[0].addEventListener("click", function () {
   if (passwordField.type == "text") {
     passwordField.type = "password";
     togglePassword[0].classList.remove("active");

    } else {
     passwordField.type = "text";
     togglePassword[0].classList.add("active");
   }
 })







