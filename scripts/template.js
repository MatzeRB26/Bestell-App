// -----------Menu cards beschreiben um es zu rendern lassen--------------

function getMenuTemplate(dish, category, index) {
    let list;
    if (category === "burger") list = menuList;
    if (category === "pizza") list = menuListTwo;
    if (category === "salad") list = menuListThree;

    let menu = list[index];

    return `
<div class="menu-card">
        <div class="menu-img"><img src="${dish.imgPath}"></div>
    <div class="menu-info-center">
        <h4>${dish.title}</h4>
        <p>${dish.description}</p>
    </div>
    <div class="menu-action-right">
        <b class="price-top">${dish.price.toFixed(2).replace(".", ",")}€</b>
        <button onclick="addToBasket('${category}', ${index})" class="menu-button">
        Add to basket</button>
    </div>
</div>
`;
}

// ------------------------basket Calculator----------------------------------

function getBasketContainerTemplate() {
    return `
    <button class="close-mobile" onclick="closeBasketMobile()">X</button>
    <h3 class="basket-title">Your Basket</h3>
        <div id="order-items-list" class="order-items-list"></div>
    <div class="basket-summery-box">
    <div class="summery-line"><span>Subtotal</span>
        <span id="subtotal">0,00€</span></div>
    <div class="summery-line"><span>Delivery fee</span>
        <span id="delivery">4,99€</span></div>
    <div class="summery-line total-line"><b>Total</b>
        <b id="total">0,00€</b></div>
    </div>

    <button id="buy-button" 
        class="buy-button"
        onclick="openDialog()">
        Buy now (<span id="buy-total">0,00€</span>)
    </button>
    `;
}

function getBasketItemTemplate(index) {
    const item = basket[index];
    const totalItemPrice = (item.price * item.amount).toFixed(2).replace(".", ",");
    return ` 
    <div class="basket-item">
        <div class="item-info"> 
        <b>${item.title}</b>
            <button class="trash-btn" onclick="deleteFromBasket(${index})">🗑️</button>
        </div>
    <div class="item-controls">
    <div class="quantity-controls">
        <button onclick="removeAmount(${index})">➖</button>
        <span>${item.amount}</span>
    <button onclick="addAmount(${index})">➕</button>
    </div>
    <span class="item-price">${totalItemPrice}€</span>
    </div>
    </div>
    `;
}

function getEmptyBasketTemplate() {
    return `
    <div class="empty-basket">
    <h3>Your Basket</h3>
    <p>Nothing here yet. Go ahead choose something deliciuos!</p>
    <img src="assets/icons/shopping-cart-icon.png" alt="cart">
    </div>
    `;
}
