// data 
let products_men = JSON.parse(localStorage.getItem("products")) || productsDB;
let products_Women = JSON.parse(localStorage.getItem("products_Women")) || products_WomenDB;
let products_Kids = JSON.parse(localStorage.getItem("products_Kids")) || products_KidsDB;
/// id
let productId = JSON.parse(localStorage.getItem("editproduct")) ;

// ///// variables  
let productCatogerySelect = document.getElementById("product-Category");
let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productPrice = document.getElementById("product-price");
let productNumber = document.getElementById("product-number");
let updateForm = document.getElementById("update-form");
let inputFile = document.getElementById("upload-image-file");
let inputFile1 = document.getElementById("upload-image-file1");
let productSizeValue;
let productImage;
let productImage1;
let getProduct;
let getProduct_Kids;
let getProduct_Women;

//// events 
productCatogerySelect.addEventListener("change" , getProductCatogeryValue);
function getProductCatogeryValue(e){
    productCatogeryValue = e.target.value ;
}


if(productId >= 1 && productId < 20){
     getProduct = products_men.find((i) => i.id === productId);
     console.log("BEFORE" ,getProduct);
     productName.value = getProduct.title;
     productDesc.value = getProduct.desc; 
     productPrice.value = +getProduct.price; 
     productNumber.value = +getProduct.number; 
     productImage = getProduct.imgUrl;
     productImage1 = getProduct.imgUrl2;
    
}else if(productId >= 20 && productId < 37){
    getProduct_Kids = products_Kids.find((i) => i.id === productId);
    console.log("BEFORE" ,getProduct_Kids);
    productName.value = getProduct_Kids.title;
    productDesc.value = getProduct_Kids.desc; 
    productPrice.value = +getProduct_Kids.price; 
    productNumber.value = +getProduct_Kids.number; 
    productImage = getProduct_Kids.imgUrl;
    productImage1 = getProduct_Kids.imgUrl2;
}else if(productId >= 37 && productId < 50){
    getProduct_Women = products_Women.find((i) => i.id === productId);
    console.log("BEFORE" ,getProduct_Women);
    productName.value = getProduct_Women.title;
    productDesc.value = getProduct_Women.desc; 
    productPrice.value = +getProduct_Women.price; 
    productNumber.value = +getProduct_Women.number; 
    productImage = getProduct_Women.imgUrl;
    productImage1 = getProduct_Women.imgUrl2;
}


// //Events
updateForm.addEventListener("submit" , createProductFunc);
inputFile.addEventListener("change" , uploadImage);
inputFile1.addEventListener("change" , uploadImage1);



function createProductFunc(e){
    e.preventDefault();
 if(productCatogeryValue === "Men"){
        getProduct.title = productName.value;
        getProduct.desc = productDesc.value;
        getProduct.price = productPrice.value;
        getProduct.number = productNumber.value ;
        getProduct.imgUrl = productImage ;
        getProduct.imgUrl2 = productImage1 ;
        localStorage.setItem("products" , JSON.stringify(products_men));
    } 
 else if(productCatogeryValue === "Women"){
        getProduct_Women.title = productName.value;
        getProduct_Women.desc = productDesc.value;
        getProduct_Women.price = productPrice.value;
        getProduct_Women.number = productNumber.value ;
        getProduct_Women.imgUrl = productImage ;
        getProduct_Women.imgUrl2 = productImage1 ;
        localStorage.setItem("products_Women" , JSON.stringify(products_Women));
    } else{
        getProduct_Kids.title = productName.value;
        getProduct_Kids.desc = productDesc.value;
        getProduct_Kids.price = productPrice.value;
        getProduct_Kids.number = productNumber.value ;
        getProduct_Kids.imgUrl = productImage ;
        getProduct_Kids.imgUrl2 = productImage1 ;
        localStorage.setItem("products_Kids" , JSON.stringify(products_Kids));
    } 
    setTimeout(()=>{
        window.location = "../sections/Men's Styles.html"
    }, 2000)
}
let types=["image/jpeg","image/png"]
function uploadImage(){
    let file = this.files[0] ;
    if(types.indexOf(file.type) ==-1){
        alert("Type not Supported");
        return;
    }
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
    }
    reader.onerror = function(){
        alert("ERORR !!")
    }
}



function uploadImage1(){
    let file = this.files[0] ;
    if(types.indexOf(file.type) ==-1){
        alert("Type not Supported");
        return;
    }
    if(file.size > 2 * 1024 * 1024){
        alert("image size larger than 2MG");
        return;
    }
    getImageBase64ForImage1(file);
    //productImage1 = URL.createObjectURL(file); // output photo by src binary
}
function getImageBase64ForImage1(file){
    let reader= new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function(){
        productImage1 = reader.result;
    }
    reader.onerror = function(){
        alert("ERORR !!")
    }
}   