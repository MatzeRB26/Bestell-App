function renderMenu() {
    const burgerRef = document.getElementById("burger-dishes");
    burgerRef.innerHTML = '';
    for (let index = 0; index < menuList.length; index++) {
        burgerRef.innerHTML += getMenuTemplate(menuList[index]);
    }
}
renderMenu();

function renderMenuTwo() {
    const pizzaRef = document.getElementById("pizza-dishes");
    pizzaRef.innerHTML = '';
    for (let index = 0; index < menuListTwo.length; index++) {
        pizzaRef.innerHTML += getMenuTemplate(menuListTwo[index]);
    }
}
renderMenuTwo();

function renderMenuThree() {
    const saladRef = document.getElementById("salad-dishes");
    saladRef.innerHTML = '';
    for (let index = 0; index < menuListThree.length; index++) {
        saladRef.innerHTML += getMenuTemplate(menuListThree[index]);
    }
}
renderMenuThree();

// -----------------------------------------------------------------------------------

function renderBasket() {
    const basketRef = document.getElementById("basket-content");
    basketRef.innerHTML = getBasketContainerTemplate();
    
    const basketItemRef = document.getElementById("basket-item");
    for (let index = 0; index < basket.length; index++) {
        basketRef.innerHTML += getBasketTemplate(index);
    }
}

function addToBasket(menu) {
    basket.push(menu);
    renderBasket();
}

// function removeFromBasket(index) {
//     basket.splice(index, 1);
//     renderBasket();
// }
