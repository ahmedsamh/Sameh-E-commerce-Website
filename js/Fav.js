
/////////// Define products
dom = document.querySelector("#new-arrivals");
domNO = document.querySelector("#new-arrivalsNo");

///////////// disply men Products ////////////
function drawFavouritesProductsUI (allProducts = []){
    if (JSON.parse(localStorage.getItem("productsFavourite")).length === 0){
    domNO.innerHTML = " There Is No Product Items!!";
    }
    let products = JSON.parse(localStorage.getItem("productsFavourite")) ||  allProducts;
  let productsUI = products.map((item)=>{
    
return `
<div class="new-product">
<div class="new-arrived-image">
  <img src="${item.imgUrl}" alt="milada-vigerova" />
  <div class="click d-flex flex-row justify-content-center align-items-center mb-3 p-1 ">
    <a onclick="removeFromFavourite(${item.id})">
      <button class="">Remove From Favourite<i class="fa-solid ${item.liked == true ? "fa-heart-circle-check" :"fa-heart-circle-plus"}" style="color:${item.liked == true ? "red" :  ""}"></i></button>
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
};
drawFavouritesProductsUI();

function removeFromFavourite(id){
    let productsFavourite = localStorage.getItem("productsFavourite") ;
    if(productsFavourite){
      let items = JSON.parse(productsFavourite);
      let filteredItems = items.filter((item) => item.id !== id);
      localStorage.setItem("productsFavourite" , JSON.stringify(filteredItems));
      drawFavouritesProductsUI(filteredItems)
    }
  }