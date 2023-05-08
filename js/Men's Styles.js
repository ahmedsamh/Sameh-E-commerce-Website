/////// user
user_info = document.querySelector(" .user_info");
Links = document.querySelector(".Links");
user = document.querySelector(" .user_info .user");

username =localStorage.getItem('userName');
if(username){
Links.remove();
user_info.style.display = "block" ;
user.innerHTML = ` ${ username} <img id="Change-Profile-Photo" style="width:25px;height:25px;border-radius:50%;margin-left:10px"  src="../imgs/images.jfif">`;}

logout =  document.querySelector("header .user_info .Log");
logout.addEventListener('click' , function(){
setTimeout(() => {
  logout.href = "../sections/signup.html"
}, 1500); 
localStorage.clear();
});

/////////// Define products
dom = document.querySelector("#new-arrivals");
let badgeDone = document.querySelector(" .badge");
let productCart = document.querySelector(" .cart-products div");
let menu = document.querySelector(".cart-products");
let icon = document.querySelector(".icon");
dom_Kids = document.querySelector("#new-arrivals_Kids");
dom_Women = document.querySelector("#new-arrivals_Women");

let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let products_Women = JSON.parse(localStorage.getItem("products_Women")) || products_WomenDB;
let products_Kids = JSON.parse(localStorage.getItem("products_Kids")) || products_KidsDB;

///////////// disply men Products ////////////
let drawProductsUI ;
( drawProductsUI= function(products = []){
  let productsUI = products.map((item)=>{
    
return `
<div class="new-product" style="border : ${item.isMe === 'Y' ? '3px solid green' : ''}">
<div class="new-arrived-image">
${item.isMe === 'Y' ? "<a onclick='DeleteProductMen(" + 
item.id + " )'  ><button style='color : red; background:white;z-index:1; font-size:20px;position:absolute;'><i class='fa-solid fa-delete-left'></i></button></a>" : ""}
  <img src="${item.imgUrl}" alt="milada-vigerova" />
  <div class="click d-flex flex-row justify-content-between align-items-center mb-3 p-1 ">
    <a onclick="saveItemData(${item.id})">
      <button>BUY NOW</button>
    </a>
    <a onclick="addedToCart(${item.id})">
      <button>Add TO Cart</button>
    </a>
    ${item.isMe === 'Y' ? "<a onclick='editproduct(" + 
    item.id + " )'  ><button style='background : red'>Edit Product</button></a>" : ""}
    <a onclick="addToFavourite(${item.id})">
      <button class="">Favourite<i class="fa-solid ${item.liked == true ? "fa-heart-circle-check" :"fa-heart-circle-plus"}" style="color:${item.liked == true ? 'red' :  ''}"></i></button>
    </a> 
  </div>
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
})(JSON.parse(localStorage.getItem("products")) || products);
//////////// disply kids Products //////////////////
let drawProductsUI_Kids ;
( drawProductsUI_Kids = function(products_Kids = []){
  let productsUI_Kids = products_Kids.map((item_kids)=>{
    
return `
<div class="new-product" style="border : ${item_kids.isMe === 'Y' ? '3px solid green' : ''}">
<div class="new-arrived-image">
${item_kids.isMe === 'Y' ? "<a onclick='DeleteProductKid(" + 
item_kids.id + " )'  ><button style='color : red; background:white;z-index:1; font-size:20px;position:absolute;'><i class='fa-solid fa-delete-left'></i></button></a>" : ""}
  <img src="${item_kids.imgUrl}" alt="milada-vigerova" />
  <div class="click d-flex flex-row justify-content-between align-items-center mb-3 p-1 ">
    <a onclick="saveItemData(${item_kids.id})">
      <button >BUY NOW</button>
    </a>
    <a onclick="addedToCart_Kids(${item_kids.id})">
      <button>Add TO Cart</button>
    </a>
    ${item_kids.isMe === 'Y' ? "<a onclick='editproduct(" + 
    item_kids.id + " )'  ><button style='background : red'>Edit Product</button></a>" : ""}
    <a   onclick="addToFavourite_kids(${item_kids.id})">
    <button class="">Favourite<i class="fa-solid ${item_kids.liked == true ? "fa-heart-circle-check" :"fa-heart-circle-plus"}" style="color:${item_kids.liked == true ? 'red' :  ''}"></i></button>
    </a>
  </div>
</div>
<div class="w3-margin-top" style="overflow: hidden; padding: 0px 20px">
  <h4 style="text-overflow: ellipsis; overflow: hidden">
  ${item_kids.title}
  </h4>
  <p class="w3-small">${item_kids.number} items in store</p>
  <p class="w3-small">${item_kids.size[0]} | ${item_kids.size[1]} | ${item_kids.size[2]}</p>
  <p class="price"> &nbsp;$${item_kids.price}</p>
</div>
</div>
`
  });
  dom_Kids.innerHTML = productsUI_Kids.join("");
})(JSON.parse(localStorage.getItem("products_Kids")) || products_Kids);
//////////  disply Women Products //////////////////////////
let drawProductsUI_Women ;
(drawProductsUI_Women= function(products_Women = []){
  let productsUI_Women = products_Women.map((item_Women)=>{
return `
<div class="new-product" style="border : ${item_Women.isMe === 'Y' ? '3px solid green' : ''}">
<div class="new-arrived-image">
${item_Women.isMe === 'Y' ? "<a onclick='DeleteProductWomen(" + 
item_Women.id + " )'  ><button style='color : red; background:white; font-size:20px;position:absolute;z-index:1'><i class='fa-solid fa-delete-left'></i></button></a>" : ""}
  <img src="${item_Women.imgUrl}" alt="milada-vigerova" />
  <div class="click d-flex flex-row justify-content-between align-items-center mb-3 p-1 ">
    <a onclick="saveItemData(${item_Women.id})">
      <button>BUY NOW</button>
    </a>
    <a onclick="addedToCart_Women(${item_Women.id})">
      <button>Add TO Cart</button>
    </a>
    ${item_Women.isMe === 'Y' ? "<a onclick='editproduct(" + 
    item_Women.id + " )'  ><button style='background : red'>Edit Product</button></a>" : ""}
    <a  onclick="addToFavourite_Women(${item_Women.id})">
    <button class="">Favourite<i class="fa-solid ${item_Women.liked == true ? "fa-heart-circle-check" :"fa-heart-circle-plus"}" style="color:${item_Women.liked == true ? 'red' :  ''}"></i></button>
    </a>
  </div>
</div>
<div class="w3-margin-top" style="overflow: hidden; padding: 0px 20px">
  <h4 style="text-overflow: ellipsis; overflow: hidden">
  ${item_Women.title}

  </h4>
  <p class="w3-small">${item_Women.number} items in store</p>
  <p class="w3-small">${item_Women.size[0]} | ${item_Women.size[1]} | ${item_Women.size[2]}</p>
  <p class="price"> &nbsp;${item_Women.price}</p>
</div>
</div>
`
  });
  dom_Women.innerHTML = productsUI_Women.join("") ;
})(JSON.parse(localStorage.getItem("products_Women")) || products_Women )

/// Check if there items in local To menu
let addedItem =localStorage.getItem("productsInCart")? 
JSON.parse(localStorage.getItem("productsInCart")):[];
//// Chech  local storage TO badge and take product from local storage to menu//////
if(addedItem){
  addedItem.map((item) => {
    productCart.innerHTML += `<p> ${item.title} (${item.quantity}) </p>` ;
  })
  badgeDone.style.display = "block";
  badgeDone.innerHTML += addedItem.length;
}  


//////////////  Men  Added To menu  and badge length ////////////////////
function addedToCart(id){
  //// check 
  if(localStorage.getItem("email")){
  let choosenItem = products.find((item)=> item.id  === id )
  
 ///// quantity product 
  let isProductInCart = addedItem.some((i) => i.id === choosenItem.id);
  if(isProductInCart){
    addedItem = addedItem.map((p)=>{
      if(p.id === choosenItem.id) p.quantity += 1;
      return p;
    });
  }else{
    addedItem.push(choosenItem);
  }
  /// UI
  productCart.innerHTML = "";
  addedItem.forEach((item) => {
    productCart.innerHTML += `<p> ${item.title} <span style="background-color:white;color:black; font-size:12px; border-radius:50%; padding-left:5px; padding-right:5px; " >${item.quantity}</span></p>` ;
  })
 //////// save data 
    localStorage.setItem('productsInCart', JSON.stringify(addedItem));
////// add counter of items
let cartProductItems = document.querySelectorAll(".cart-products div p");
  badgeDone.style.display = "block";
  badgeDone.innerHTML =  cartProductItems.length  ; 
  }else{
    window.location='../sections/login.html'
  }
}


///////////// Kids Added To menu  and badge length//////////////////////
function addedToCart_Kids(id){
  //// check 
  if(localStorage.getItem("email")){
    let choosenItem_kids = products_Kids.find((item)=> item.id  === id )
   ///// quantity product 
    let isProductInCart = addedItem.some((it) => it.id === choosenItem_kids.id);
    if(isProductInCart){
      addedItem = addedItem.map((p)=>{
        if(p.id === choosenItem_kids.id) p.quantity += 1;
        return p;
      });
    }else{
      addedItem.push(choosenItem_kids);
    }
    /// UI
    productCart.innerHTML = "";
    addedItem.forEach((item) => {
      productCart.innerHTML += `<p > ${item.title} <span style="background-color:white;color:black; font-size:12px; border-radius:50%; padding-left:5px; padding-right:5px; " >${item.quantity}</span></p>` ;
    })
   //////// save data 
      localStorage.setItem('productsInCart', JSON.stringify(addedItem));
  ////// add counter of items
  let cartProductItems = document.querySelectorAll(".cart-products div p");
    badgeDone.style.display = "block";
    badgeDone.innerHTML =  cartProductItems.length  ; 
    }else{
      window.location='../sections/login.html'
    }
}
////// Women Added To menu  and badge length///////////////
function addedToCart_Women(id){
  //// check 
  if(localStorage.getItem("email")){
    let choosenItem_women = products_Women.find((item)=> item.id  === id )
   ///// quantity product 
    let isProductInCart = addedItem.some((it) => it.id === choosenItem_women.id);
    if(isProductInCart){
      addedItem = addedItem.map((p)=>{
        if(p.id === choosenItem_women.id) p.quantity += 1;
        return p;
      });
    }else{
      addedItem.push(choosenItem_women);
    }
    /// UI
    productCart.innerHTML = "";
    addedItem.forEach((item) => {
      productCart.innerHTML += `<p> ${item.title} <span style="background-color:white;color:black; font-size:12px; border-radius:50%; padding-left:5px; padding-right:5px; " >${item.quantity}</span></p>` ;
    })
   //////// save data 
      localStorage.setItem('productsInCart', JSON.stringify(addedItem));
  ////// add counter of items
  let cartProductItems = document.querySelectorAll(".cart-products div p");
    badgeDone.style.display = "block";
    badgeDone.innerHTML =  cartProductItems.length  ; 
    }else{
      window.location='../sections/login.html'
    }
}


////// To Open Menu //////////////////////
icon.addEventListener('click' , openmenu)
function openmenu(){
  if (productCart.innerHTML != ""){
    if(menu.style.display == "block"){
      menu.style.display = "none"
    }else{
      menu.style.display = "block"
    }
  }
}

//////////// settings Move ////////////
let move = document.querySelector(".fix");
let menu_Toggle = document.querySelector(".Filter .nav");
move.addEventListener('click' ,  openFix)
function openFix(){
  if(menu_Toggle.style.display == "block"){
    menu_Toggle.style.display = "none"
  }else{
    menu_Toggle.style.display = "block"
  }
}

function saveItemData(id){
  localStorage.setItem("productId" ,  id);
  window.location= "../sections/product.html";
}

input = document.getElementById("search");
input.addEventListener('keyup' ,function(e){
  search(e.target.value  , JSON.parse(localStorage.getItem("products"))) 
  search_Women(e.target.value  , JSON.parse(localStorage.getItem("products_Women"))) 
  search_Kids(e.target.value  , JSON.parse(localStorage.getItem("products_Kids"))) 

if(e.target.value.trim() === ""){
  drawProductsUI(JSON.parse(localStorage.getItem("products")));
  drawProductsUI_Women(JSON.parse(localStorage.getItem("products_Women")));
  drawProductsUI_Kids(JSON.parse(localStorage.getItem("products_Kids")));
}
});

function search(title , myArray){
  // for(var i = 0 ; i < myArray.length ; i++){
  //   if(myArray[i].title === title){ 
  //     console.log(myArray[i]);
  //   }
  // }
  let arr = myArray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1) 
  drawProductsUI(arr);
}
// search("ADIDAS LOGO T-SHIRT" , JSON.parse(localStorage.getItem("products")));


function search_Women(title , myArray){
  // for(var i = 0 ; i < myArray.length ; i++){
  //   if(myArray[i].title === title){ 
  //     console.log(myArray[i]);
  //   }
  // }
  let arr = myArray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1) 
  drawProductsUI_Women(arr);
}
// search("ADIDAS LOGO T-SHIRT" , JSON.parse(localStorage.getItem("products")));


function search_Kids(title , myArray){
  // for(var i = 0 ; i < myArray.length ; i++){
  //   if(myArray[i].title === title){ 
  //     console.log(myArray[i]);
  //   }
  // }
  let arr = myArray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1) 
  drawProductsUI_Kids(arr);
}
// search("ADIDAS LOGO T-SHIRT" , JSON.parse(localStorage.getItem("products")));



//////////////  Men  Added To Favourite  ////////////////////
/////// When refresh
let favouriteItems = localStorage.getItem("productsFavourite")? 
JSON.parse(localStorage.getItem("productsFavourite")):[];
if(favouriteItems){
            ///// هات المختاره من products وعيد استخدام الfuncttion 
            products.map((item)=>{ 
              favouriteItems.map((it)=>{
                if(it.id === item.id){
                  item.liked = true ;
                }
              })
            });
            localStorage.setItem("products" , JSON.stringify(products))
            drawProductsUI(products);

        ///// هات المختاره من products وعيد استخدام الfuncttion 
        products_Kids.map((item)=>{ 
          favouriteItems.map((it)=>{
            if(it.id === item.id){
              item.liked = true ;
            }
          })
        });
    localStorage.setItem("products_Kids" , JSON.stringify(products_Kids))
    drawProductsUI_Kids(products_Kids);
        

    ///// هات المختاره من products وعيد استخدام الfuncttion 
    products_Women.map((item)=>{ 
      favouriteItems.map((it)=>{
        if(it.id === item.id){
          item.liked = true ;
        }
      })
    });
localStorage.setItem("products_Women" , JSON.stringify(products_Women))
drawProductsUI_Women(products_Women);
}
function addToFavourite(id){
  //// check 
  if(localStorage.getItem("email")){
  let choosenItem = products.find((item)=> item.id  === id )
  ///////////////// red love //////////////
  choosenItem.liked = true ; 
 ///// quantity product 
    ////// add 
    favouriteItems = [...favouriteItems , choosenItem];
    
    ///// call function
    let uniqueProducts = getUniqueArr(favouriteItems , "id")
    localStorage.setItem('productsFavourite', JSON.stringify(uniqueProducts));
            ///// هات المختاره من products وعيد استخدام الfuncttion 
            products.map((item)=>{ 
              favouriteItems.map((it)=>{
                if(it.id === item.id){
                  item.liked = true ;
                }
              })
            });
            localStorage.setItem("products" , JSON.stringify(products))
            drawProductsUI(products);
  }else{
    window.location='../sections/login.html'
  }
}
//////////////  kids  Added To Favourite  ///////////////////
function addToFavourite_kids(id){
  //// check 
  if(localStorage.getItem("email")){
  let choosenItem_kids = products_Kids.find((item)=> item.id  === id )
  ///////////////// red love //////////////
  choosenItem_kids.liked = true ; 
 ///// quantity product 
    ////// add 
    favouriteItems = [...favouriteItems , choosenItem_kids];
    ///// call function
    let uniqueProducts = getUniqueArr(favouriteItems , "id")
    localStorage.setItem('productsFavourite', JSON.stringify(uniqueProducts));

        ///// هات المختاره من products وعيد استخدام الfuncttion 
            products_Kids.map((item)=>{ 
              favouriteItems.map((it)=>{
                if(it.id === item.id){
                  item.liked = true ;
                }
              })
            });
        localStorage.setItem("products_Kids" , JSON.stringify(products_Kids))
        drawProductsUI_Kids(products_Kids);

  }else{
    window.location='../sections/login.html'
  }
}

//////////////  women  Added To Favourite  ///////////////////
function addToFavourite_Women(id){
  //// check 
  if(localStorage.getItem("email")){
  let choosenItem_women = products_Women.find((item)=> item.id  === id )
  ///////////////// red love //////////////
  choosenItem_women.liked = true ; 
 ///// quantity product 
    ////// add 
    favouriteItems = [...favouriteItems , choosenItem_women];
    ///// call function
    let uniqueProducts = getUniqueArr(favouriteItems , "id")
    localStorage.setItem('productsFavourite', JSON.stringify(uniqueProducts));

    ///// هات المختاره من products وعيد استخدام الfuncttion 
            products_Women.map((item)=>{ 
              favouriteItems.map((it)=>{
                if(it.id === item.id){
                  item.liked = true ;
                }
              })
            });
    localStorage.setItem("products_Women" , JSON.stringify(products_Women))
    drawProductsUI_Women(products_Women);
  }else{
    window.location='../sections/login.html'
  }
}

//////////////  added to menu and storage products without repeat //////
function getUniqueArr(arr , filterType){
  let unique =arr
  .map((item) => item[filterType])
  .map((item , i , final)=> final.indexOf(item) === i && i)
  .filter((item) => arr[item])
  .map((item) => arr[item]);
  return unique;
}



//// Edit Product 
function editproduct(id){
  localStorage.setItem("editproduct" , id  );
  console.log("id" , id);
  window.location = "../sections/Editproduct.html"
}

function DeleteProductMen(id){
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;
  let myProducts = products.filter((item) => item.isMe ==="Y");
  let filtered = myProducts.filter((i)=> i.id !== id)
  let clickedItem = myProducts.find((i)=>i.id === id)
  products = products.filter((i)=> i.id !== clickedItem.id);
  localStorage.setItem('products', JSON.stringify(products));
  drawProductsUI(products); 
}

function DeleteProductWomen(id){
  let products_Women = JSON.parse(localStorage.getItem("products_Women")) || products_WomenDB;
  let myProducts = products_Women.filter((item) => item.isMe ==="Y");
  let filtered = myProducts.filter((i)=> i.id !== id)
  let clickedItem = myProducts.find((i)=>i.id === id)
  products_Women = products_Women.filter((i)=> i.id !== clickedItem.id);
  localStorage.setItem('products_Women', JSON.stringify(products_Women ));
  drawProductsUI_Women(products_Women); 
}

function DeleteProductKid(id){
  let products_Kids = JSON.parse(localStorage.getItem("products_Kids")) || products_KidsDB;
  let myProducts = products_Kids.filter((item) => item.isMe ==="Y");
  let filtered = myProducts.filter((i)=> i.id !== id)
  let clickedItem = myProducts.find((i)=>i.id === id)
  products_Kids = products_Kids.filter((i)=> i.id !== clickedItem.id);
  localStorage.setItem('products_Kids', JSON.stringify( products_Kids));
  drawProductsUI_Kids(products_Kids); 
}

let photoProfileChanged = document.querySelector("#Change-Profile-Photo");

if(JSON.parse(localStorage.getItem("photo"))){
    photoProfileChanged.src = JSON.parse(localStorage.getItem("photo"));
}