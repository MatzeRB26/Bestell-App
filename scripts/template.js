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

// -----------------------------------------------------------------------------------------

function getBasketTemplate(index) {
    return `
        <div class="dish-basket">
        <div id="basket-item">
        <h5>${basket[index].title}</h5>
        <p>${basket[index].price.toFixed(2).replace(".", ",")}€</p>
        </div>
        </div>
    `;
}

function getBasketContainerTemplate() {
    return `
    <h3>Your Basket</h3>
    `;
}
