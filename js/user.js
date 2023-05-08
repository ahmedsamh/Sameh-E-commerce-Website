user_info = document.querySelector(" .user_info");
Links = document.querySelector(".Links");
user = document.querySelector(" .user_info .user");

username =localStorage.getItem('userName');
if(username){
Links.remove();
user_info.style.display = "block" ;
user.innerHTML = ` ${ username} <img id="Change-Profile-Photo" style="width:25px;height:25px;border-radius:50%;margin-left:10px"  src="../imgs/images.jfif">`;
}

logout =  document.querySelector("header .user_info .Log");
logout.addEventListener('click' , function(){
setTimeout(() => {
  logout.href = "../sections/signup.html"
}, 1500); 
localStorage.clear();
});


let noProduct2 = document.querySelector(".noProduct2");
let badgeDone = document.querySelector(" .badge");
let productCart = document.querySelector(" .cart-products div");
let icon = document.querySelector(".icon");
let menu = document.querySelector(".cart-products");
//////////////  Display products in menu in shopping-cart page when clock to remove product  ////////////
function displayMenu(allProducts = []){
  ///////////Check No Product //// 
  let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts ;
  let productsUI_product = products.map((item)=>{
    return `
      <p>${item.title}</p>
    `;
      });
      productCart.innerHTML = productsUI_product; 
      if(JSON.parse(localStorage.getItem("productsInCart")).length === 0){
        noProduct2.innerHTML = "OOPS , THERE IS NO PRODUCTS !!!!";
        icon.addEventListener('click' , close);
      }
};

//// Chech  local storage//////
let addedItem =localStorage.getItem("productsInCart")? 
JSON.parse(localStorage.getItem("productsInCart")):[];
if(addedItem){
  addedItem.map((item) => {
    productCart.innerHTML += `<p> ${item.title} (${item.quantity})</p>` ;
  })
  badgeDone.style.display = "block";
  badgeDone.innerHTML += addedItem.length;
}

////// To Open Menu //////////////////////
icon.addEventListener('click' , openmenu);
function openmenu(){
  if (productCart.innerHTML != ""){
    if(menu.style.display == "block"){
      menu.style.display = "none"
    }else{
      menu.style.display = "block";
    }
  }
}
///////// To close Menu When no product ///////////////
function close(){
  if (productCart.innerHTML == ""){
    if(menu.style.display == "none"){
      menu.style.display = "block"
    }else{
      menu.style.display = "none";
    }
  }
}


let photoProfileChanged = document.querySelector("#Change-Profile-Photo");


if(JSON.parse(localStorage.getItem("photo"))){
    photoProfileChanged.src = JSON.parse(localStorage.getItem("photo"));
}