let products =JSON.parse(localStorage.getItem("products")) ;
let products_Women = JSON.parse(localStorage.getItem("products_Women")) ;
let products_Kids = JSON.parse(localStorage.getItem("products_Kids")) ;
let productInCart = JSON.parse(localStorage.getItem("productsInCart"));
let productId = localStorage.getItem("productId");
let dom = document.querySelector("#DOM");
let Products_details = products.find((item) => item.id == productId);
let Products_details_Women = products_Women.find((item) => item.id == productId);
let Products_details_Kids = products_Kids.find((item) => item.id == productId);
let Product = productInCart.find((item) => item.id == productId);


///////////// disply men Products ////////////
if(Products_details){
(function drawProductsUI(){
  dom.innerHTML = `
<div class="col-lg-5 col-md-12 col-12">
<img
  class="img-fluid w-100 Image"
  src="${Products_details.imgUrl}"
  id="mainImg"
  alt=""
/>
<div class="small-img-group">
  <div class="small-img-col">
    <img
      src="${Products_details.imgUrl}"
      width="100%"
      class="small-img"
      alt=""
    />
  </div>
  <div class="small-img-col">
    <img
      src="${Products_details.imgUrl2}"
      width="100%"
      class="small-img"
      alt=""
    />
  </div>
</div>
</div>
<div class="col-lg-7 col-md-12 col-12 mt-5">
<h3 class="py-4">${Products_details.title}</h3>
<h2>${Products_details.price}</h2>

<label for="Size">Size: </label>
<select class="Size my-3">
  <option>M</option>
  <option>L</option>
  <option>XL</option>
  <option>XXL</option>
</select>
<br />
<label for="Quantity">Quantity: </label>
<input class="Quantity" type="number" readonly value="${Products_details.quantity}" />
<h4 class="mt-5 mb-5">Product Details</h4>
<span>
${Products_details.desc}
</span>
<span>
<button onclick=editproductMen(${productId})> Edit Product </button>
</span>
</div>
`
})();
}
if(Products_details_Women){
(function drawProductsUI_Women(){
  dom.innerHTML = `
<div class="col-lg-5 col-md-12 col-12">
<img
  class="img-fluid w-100 Image"
  src="${Products_details_Women.imgUrl}"
  id="mainImg"
  alt=""
/>
<div class="small-img-group">
  <div class="small-img-col">
    <img
      src="${Products_details_Women.imgUrl}"
      width="100%"
      class="small-img"
      alt=""
    />
  </div>
  <div class="small-img-col">
    <img
      src="${Products_details_Women.imgUrl2}"
      width="100%"
      class="small-img"
      alt=""
    />
  </div>
</div>
</div>
<div class="col-lg-7 col-md-12 col-12 mt-5">
<h3 class="py-4">${Products_details_Women.title}</h3>
<h2>${Products_details_Women.price}$</h2>

<label for="Size">Size: </label>
<select class="Size my-3">
  <option>M</option>
  <option>L</option>
  <option>XL</option>
  <option>XXL</option>
</select>
<br />
<label for="Quantity">Quantity: </label>
<input class="Quantity" type="number" value="${Products_details_Women.quantity}" />
<h4 class="mt-5 mb-5">Product Details</h4>
<span>
${Products_details_Women.desc}
</span>
<span>
<button onclick=editproductWomen(${productId})> Edit Product </button>
</span>
</div>
`
})();
}
if(Products_details_Kids){
(function drawProductsUI_Kids(){
  dom.innerHTML = `
<div class="col-lg-5 col-md-12 col-12">
<img
  class="img-fluid w-100 Image"
  src="${Products_details_Kids.imgUrl}"
  id="mainImg"
  alt=""
/>
<div class="small-img-group">
  <div class="small-img-col">
    <img
      src="${Products_details_Kids.imgUrl}"
      width="100%"
      class="small-img"
      alt=""
    />
  </div>
  <div class="small-img-col">
    <img
      src="${Products_details_Kids.imgUrl2}"
      width="100%"
      class="small-img"
      alt=""
    />
  </div>
</div>
</div>
<div class="col-lg-7 col-md-12 col-12 mt-5">
<h3 class="py-4">${Products_details_Kids.title}</h3>
<h2>${Products_details_Kids.price}$</h2>

<label for="Size">Size: </label>
<select class="Size my-3">
  <option>M</option>
  <option>L</option>
  <option>XL</option>
  <option>XXL</option>
</select>
<br />
<label for="Quantity">Quantity: </label>
<input class="Quantity" type="number" value="${Products_details_Kids.quantity}" />
<h4 class="mt-5 mb-5">Product Details</h4>
<span>
${Products_details_Kids.desc}
</span>
<span>
<button onclick=editproductKid(${productId})> Edit Product </button>
</span>
</div>
`
})();
}
var mainImg = document.getElementById("mainImg");
var smalling = document.querySelectorAll(".small-img");
var btn = document.getElementsByClassName("buy-btn");
smalling[0].onclick = function () {
  mainImg.src = smalling[0].src;
};
smalling[1].onclick = function () {
  mainImg.src = smalling[1].src;
};
btn.onclick = function () {
  Swal.fire("Succes , Added to Card");
};

//// Edit Product 
function editproductMen(id){
  localStorage.setItem("editproduct" , id  );
  window.location = "../sections/Editproduct.html"
}
function editproductWomen(id){
  localStorage.setItem("editproduct" , id  );
  window.location = "../sections/Editproduct.html"
}
function editproductKid(id){
  localStorage.setItem("editproduct" , id  );
  window.location = "../sections/Editproduct.html"
}
