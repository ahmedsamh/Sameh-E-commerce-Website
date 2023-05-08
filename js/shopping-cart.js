let body_Product = document.querySelector("#cart-container table tbody");
let noProduct = document.querySelector(".noProduct");

////////////// display product in shopping-cart /////////////////
function drawCartProductsUI(allProducts = []){
  ///////////Check No Product //// 
  if(JSON.parse(localStorage.getItem("productsInCart")).length === 0){
    noProduct.innerHTML = "OOPS , THERE IS NO PRODUCTS !!!!"
  }
  let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts ;
  let productsUI_product = products.map((item)=>{
    return `
    <tr>
    <td>
      <a  onclick="removeItemFormCart(${item.id})"
        ><iconify-icon 
          icon="material-symbols:delete-rounded"
          style="color: black"
          width="24"
        ></iconify-icon>
      </a>
    </td>
    <td><img src="${item.imgUrl}" width="100%" alt="" /></td>
    <td>
      <h6>${item.title}</h6>
    </td>
    <td>${item.quantity}</td>
    <td>
    <select class="Size my-3">
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
    </select>    </td>
    <td>
      <h6>${item.price * item.quantity} </h6>
    </td>
  </tr>
    `;
      });
      body_Product.innerHTML = productsUI_product.join(""); 
}
drawCartProductsUI();

////// remove product from cart //////////////
function removeItemFormCart(id){
  let productsInCart = localStorage.getItem("productsInCart") ;
  if(productsInCart){
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsInCart" , JSON.stringify(filteredItems));
    drawCartProductsUI(filteredItems)
    displayMenu(filteredItems)
//// Chech  local storage//////
let addedItem =localStorage.getItem("productsInCart")? 
JSON.parse(localStorage.getItem("productsInCart")):[];
if(addedItem){
  badgeDone.style.display = "block"
  badgeDone.innerHTML = addedItem.length
}
  }
}




