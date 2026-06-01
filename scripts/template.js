// ----------------Menu cards beschreiben um es zu rendern lassen---------------------------------

function getMenuTemplate(menu) {
    return `
    <div class="menu-card">
        <div class="menu-img">
            <img src="${menu.imgPath}">
        </div>

        <div class="menu-content">
            <div class="menu-header">
                <div class="menu-title-info">
                    <h3>${menu.title}</h3>
                    <p>${menu.description}</p>
                </div>
            </div>
                <div class="menu-footer">
                        <b>${menu.price.toFixed(2).replace(".", ",")}€</b>    
                    <button onclick='addToBasket(${JSON.stringify(menu)})' class="menu-button">
                        Add to basket
                    </button>
                </div>
        </div>
    </div>
    `;
}

// ------------------------------------Basket funktionen innerhalb-----------------------------------------------------

function getBasketTemplate(index) {
    return `
        <div id="basket-item">
            <div class="top-basket">
                    <h5>${basket[index].title}</h5>
                    <button class="trash" onclick="getRemoveFromBasket(${index})"> 🗑️ </button>
            </div>
                    
            <div class="basket-amount">
                <div class="bottom-basket">
                    <button class="minus-amount" onclick="removeAmount(${index})"> ➖ </button>
                    <span class="number">${basket[index].amount}</span>
                    <button class="plus-amount" onclick="addAmount(${index})"> ➕ </button>
                </div>
                    <p>${(basket[index].price * basket[index].amount).toFixed(2).replace(".", ",")}€</p>
            </div>
        </div>
        `;
}

// ---------------------------styling basket-------------------------------------

function getBasketContainerTemplate() {
    return `
    <h3>Your Basket</h3>
        <div id="order-content"></div>
    <table class="pricetotal">
    <tr>
        <td>Subtotal</td>
        <td id="subtotal"></td>
    </tr>
    <tr>
        <td>Delivery fee</td>
        <td id="deliveryFee"></td>
    </tr>
    <tr>
        <td>
            <div class="line"></div>
        </td>
    </tr>
    <tr class="totalEnd">
        <td>Total</td>
        <td id="total"></td>
    </tr>
    </table>

    <button id="buy-button" 
        class="buynow"
        onclick="openDialog()" disabled>
        Buy now (<span id="buy-total"></span>)
    </button>
    `;
}



