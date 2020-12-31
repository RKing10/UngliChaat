// let carts = document.querySelectorAll('.price');

// for(let i=0; i < carts.length; i++) {
//     console.log('my loop');
// }

let carts = document.querySelectorAll('.order-btn');


// let x = document.querySelectorAll('.item');
// for(let i=0; i < x.length; i++) {
     
//     console.log(x[i].textContent)
    
    
       
// }

let products = [

    {
        name: 'Chilli Paneer',
        tag: 'vegcheesesandwich',
        price: 69 , 
        inCart: 0
    }, 
    {
        name: 'Macroni',
        tag: 'vegsandwich', 
        price: 50 , 
        inCart: 0
    }, 
    {
        name: 'Schezwan Fried Rice',
        tag: 'paneersandwich', 
        price: 60 , 
        inCart: 0
    }, 
    {
        name: 'Schezwan Noodles',
        tag: 'paneercheesesandwich',
        price: 60 , 
        inCart: 0
    }, 
    {
        name: 'Veg Combi',
       
        price: 80 , 
        inCart: 0
    }, 
    {
        name: 'Veg Hakka Noodles',
         
        price: 60 , 
        inCart: 0
    }, 
    {
        name: 'Veg Mannchurian',
        
        price: 60 , 
        inCart: 0
    }, 
    {
        name: 'Veg Noodles',
        
        price: 50 , 
        inCart: 0
    } 

]

for(let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        // let itemName = document.querySelectorAll(".item");
        // let itemPrice = document.querySelectorAll(".price");
        // let itemQty = document.querySelectorAll('.qty');
        // console.log(itemName[i].textContent);
        // console.log(itemPrice[i].textContent);
        // console.log(itemQty[i].textContent);

        totalCost(products[i]);
    }) 
      
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if(productNumbers) {
        document.querySelector('.cart-qty').textContent = productNumbers;
    }
}
function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-qty').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-qty').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems, 
                [product.name]: product
            }
        }
         cartItems[product.name].inCart += 1;
        
    }
    else{
        product.inCart = 1;
        cartItems = {
            [product.name] : product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    //console.log("The product price is" , product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartcart is", cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
        
    }
    else{
        localStorage.setItem("totalCost", product.price)
    }
    
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem("totalCost");
    let productContainer = document.querySelector(".products")
    if(cartItems && productContainer){
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img src="res/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">
                ₹${item.price}.00
            </div>
            <div class="quantity">
                <span>${item.inCart}</span>
            </div>
            <div class="total">
                ₹${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class=basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    ₹${cartCost}.00
                </h4>
            </div>
        `;
    }
}

onLoadCartNumbers()
displayCart();


