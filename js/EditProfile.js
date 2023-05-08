/// local
let useremail =localStorage.getItem('email');

///// variable
let profileName = document.getElementById("profile-name");
let profileEmail = document.getElementById("profile-email");
let updateForm = document.getElementById("update-form");

profileName.value = username;
profileEmail.value = useremail; 

// Events
updateForm.addEventListener("submit" , createProductFunc);
function createProductFunc(e){
    e.preventDefault();
    localStorage.setItem("userName" ,  profileName.value)
    localStorage.setItem("email" ,  profileEmail.value)
    setTimeout(()=>{
        window.location = "../sections/profile.html"
    }, 2000)
}
