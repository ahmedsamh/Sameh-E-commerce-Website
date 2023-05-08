let email = document.getElementById("useremailLogin");
let password = document.getElementById("passwordLogin");
let btn = document.getElementById("btn");

getEmail =localStorage.getItem('email');
getPass =localStorage.getItem('password');


btn.addEventListener('click' , function(e){
    e.preventDefault();
    if ( email.value === "" || password.value === "") {
    alert("PLease enter data")
    }
      else{
      if(getEmail && email.value.trim() == getEmail &&  getPass && password.value == getPass ){

        setTimeout(() => {
          window.location = "../index.html"
      }, 1500);      }
      else{
      alert("email or password Wrong")
      }
      }
})