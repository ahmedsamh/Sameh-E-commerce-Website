///// variables 
let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productPrice = document.getElementById("product-price");
let productNumber = document.getElementById("product-number");
let productCatogerySelect = document.getElementById("product-Category");
let productForm = document.getElementById("create-form");
let inputFile = document.getElementById("upload-image-file");
let inputFile1 = document.getElementById("upload-image-file1");
let productSizeValue;
let productCatogeryValue;
let productImage;
let productImage1;


//Events
productCatogerySelect.addEventListener("change" , getProductCatogeryValue);
productForm.addEventListener("submit" , createProductFunc);
inputFile.addEventListener("change" , uploadImage);
inputFile1.addEventListener("change" , uploadImage1);

////// Functions 

function getProductCatogeryValue(e){
    productCatogeryValue = e.target.value ;
}

function createProductFunc(e){
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
    let allProducts_Women = JSON.parse(localStorage.getItem("products_Women")) || products_WomenDB;
    let allProducts_Kids = JSON.parse(localStorage.getItem("products_Kids")) || products_KidsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;
    let priceValue = productPrice.value;
    let numberValue = productNumber.value;
    if (nameValue && descValue && priceValue && numberValue){

    if(productCatogeryValue === "Men"){
        let obj_Men ={
            id : allProducts ? allProducts.length + 1  : 1,
            quantity :1 ,
            imgUrl : productImage ,
            imgUrl2 : productImage1,
            size:["Small" , "Mediam" ,  "Large"],
            title : nameValue,
            desc : descValue,
            number : numberValue,
            price : priceValue,
            isMe : 'Y',
        };
        let newProducts = allProducts ? [...allProducts , obj_Men] : [obj_Men];
        localStorage.setItem("products" , JSON.stringify(newProducts));
    }else if(productCatogeryValue === "Women"){
        let obj_Women ={
            id : allProducts_Women ? allProducts_Women.length + 37: 1,
            quantity :1 ,
            size:["Small" , "Mediam" ,  "Large"],
            imgUrl : productImage ,
            imgUrl2 : productImage1,
            title : nameValue,
            desc : descValue,
            number : numberValue,
            price : priceValue,
            isMe : 'Y',
        };
        let newProducts_Women = allProducts_Women ? [...allProducts_Women , obj_Women] : [obj_Women];
        localStorage.setItem("products_Women" , JSON.stringify(newProducts_Women));
    }else{
        
    let obj_Kids ={
        id : allProducts_Kids ? allProducts_Kids.length + 20 : 1,
        quantity :1 ,
        size:["Small" , "Mediam" ,  "Large"],
        title : nameValue,
        imgUrl : productImage ,
        imgUrl2 : productImage1,
        desc : descValue,
        number : numberValue,
        price : priceValue,
        isMe : 'Y',
    };
        let newProducts_Kids = allProducts_Kids ? [...allProducts_Kids, obj_Kids] : [obj_Kids];
        localStorage.setItem("products_Kids" , JSON.stringify(newProducts_Kids));
    }
    productName.value= "";
    productDesc.value= "";
    productPrice.value= "";
    productNumber.value = "";
    setTimeout(()=>{
        window.location = "../sections/Men's Styles.html"
    }, 2000)
}
else{
    alert("Enter Data....")
}
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