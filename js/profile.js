/// localstorage 
let useremail =localStorage.getItem('email');
//// variable
let name1 = document.querySelector(".profile .personal-information .name-personal")
let email1 = document.querySelector(".profile .personal-information #email")

if(username){
    name1.innerHTML = `${username}`;
    email1.innerHTML = `${useremail}`;

    }
///photo 
const profilePhotoInput = document.getElementById('profile-photo-input');
const previewImage = document.querySelector('.profile .photo .img-person');
let productImage ;
profilePhotoInput.addEventListener("change" , uploadImage);

///// nav photo


if(JSON.parse(localStorage.getItem("photo"))){
    previewImage.src = JSON.parse(localStorage.getItem("photo"));
}

let types=["image/jpeg","image/png"]
function uploadImage(){
    let file = this.files[0] ;

    if(file.size > 2 * 1024 * 1024){
        alert("image size larger than 2MG");
        return;
    }
    getImageBase64ForImage(file);


    // = URL.createObjectURL(file); // output photo by src binary
}
function getImageBase64ForImage(file){
    let reader= new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function(){
        productImage = reader.result;
        upload()
        console.log(productImage)
    }
    reader.onerror = function(){
        alert("ERORR !!")
    }
}
function upload(){
    previewImage.src = productImage;
    localStorage.setItem("photo" , JSON.stringify(productImage));
    photoProfileChanged.src = JSON.parse(localStorage.getItem("photo"));
}


///// my product 
let  products_length = document.querySelector(".profile .personal-information #length")
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let products_Women = JSON.parse(localStorage.getItem("products_Women")) || products_WomenDB;
let products_Kids = JSON.parse(localStorage.getItem("products_Kids")) || products_KidsDB;
let my_products = products.filter(i => i.isMe ==="Y");
let my_products_Women = products_Kids.filter(i => i.isMe ==="Y");
let my_products_Kids = products_Women.filter(i => i.isMe ==="Y");

let length = my_products.length + my_products_Women.length + my_products_Kids.length;
if(length != 0){
    products_length.innerHTML = length;
}else{
    products_length.innerHTML = 0; 
}



////// display 
///////////// disply men Products ////////////
dom = document.querySelector("#profile-product");
domNO = document.querySelector("#profile-productsNo");

let drawProductsUI ;
( drawProductsUI= function(my_products = []){
    if (my_products.length === 0){
        domNO.innerHTML = " There Is No Product Items!!";
        }
  let productsUI = my_products.map((item)=>{
    
return `
<div class="new-product">
<div class="new-arrived-image">
  <img src="${item.imgUrl}" alt="milada-vigerova" />
</div>
<div class="w3-margin-top" style="overflow: hidden; padding: 0px 20px">
  <h4 style="text-overflow: ellipsis; overflow: hidden">
  ${item.title}
  </h4>
  <p class="w3-small">${item.number} items in store</p>
  <p class="w3-small">${item.size[0]} | ${item.size[1]} | ${item.size[2]}</p>
  <p class="price"> &nbsp;${item.price}</p>
</div>
</div>
`
  });
  dom.innerHTML = productsUI.join("") ;
})( my_products);

/// Kids
dom_Kids = document.querySelector("#profile-product-kids");
domNO_Kids = document.querySelector("#profile-productsNo-kids");

let drawProductsUI_Kids ;
( drawProductsUI_Kids= function(my_products_Kids = []){
    if (my_products_Kids.length === 0){
        domNO_Kids.innerHTML = " There Is No Product Items!!";
        }
  let productsUI_Kids = my_products_Kids.map((item)=>{
    
return `
<div class="new-product">
<div class="new-arrived-image">
  <img src="${item.imgUrl}" alt="milada-vigerova" />
</div>
<div class="w3-margin-top" style="overflow: hidden; padding: 0px 20px">
  <h4 style="text-overflow: ellipsis; overflow: hidden">
  ${item.title}
  </h4>
  <p class="w3-small">${item.number} items in store</p>
  <p class="w3-small">${item.size[0]} | ${item.size[1]} | ${item.size[2]}</p>
  <p class="price"> &nbsp;${item.price}</p>
</div>
</div>
`
  });
  dom_Kids.innerHTML = productsUI_Kids.join("") ;
})( my_products_Kids);


/// women
dom_women = document.querySelector("#profile-product-women");
domNO_women = document.querySelector("#profile-productsNo-women");
let drawProductsUI_Women ;
( drawProductsUI_Women= function(my_products_Women = []){
    if (my_products_Women.length === 0){
        domNO_women.innerHTML = " There Is No Product Items!!";
        }
  let productsUI_Women = my_products_Women.map((item)=>{
    
return `
<div class="new-product">
<div class="new-arrived-image">
  <img src="${item.imgUrl}" alt="milada-vigerova" />
</div>
<div class="w3-margin-top" style="overflow: hidden; padding: 0px 20px">
  <h4 style="text-overflow: ellipsis; overflow: hidden">
  ${item.title}
  </h4>
  <p class="w3-small">${item.number} items in store</p>
  <p class="w3-small">${item.size[0]} | ${item.size[1]} | ${item.size[2]}</p>
  <p class="price"> &nbsp;${item.price}</p>
</div>
</div>
`
  });
  dom_women.innerHTML = productsUI_Women.join("") ;
})( my_products_Women);
