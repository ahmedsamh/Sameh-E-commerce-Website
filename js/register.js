let userName = document.getElementById("usernameSignup");
let email = document.getElementById("useremailSignup");
let password = document.getElementById("passwordSignup");
//
let button = document.getElementById("sign-button");
button.addEventListener('click' , function(e){
    e.preventDefault();
    if (userName.value === "" || email.value === "" || password.value === "") {
    alert("PLease enter data")
    }
      else{
        localStorage.setItem('userName' , userName.value);
        localStorage.setItem('email' , email.value);
        localStorage.setItem('password' , password.value);

        setTimeout(() => {
            window.location = "../sections/login.html"
        }, 1500);
      }
})

