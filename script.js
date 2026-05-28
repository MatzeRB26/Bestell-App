function renderMenu() {
    const burgerRef = document.getElementById("burger-dishes");
    burgerRef.innerHTML = "";
    for (let index = 0; index < menuList.length; index++) {
        burgerRef.innerHTML += getMenuTemplate(menuList[index]);
    }
}
renderMenu();

function renderMenuTwo() {
    const pizzaRef = document.getElementById("pizza-dishes");
    pizzaRef.innerHTML = "";
    for (let index = 0; index < menuListTwo.length; index++) {
        pizzaRef.innerHTML += getMenuTemplate(menuListTwo[index]);
    }
}
renderMenuTwo();

function renderMenuThree() {
    const saladRef = document.getElementById("salad-dishes");
    saladRef.innerHTML = "";
    for (let index = 0; index < menuListThree.length; index++) {
        saladRef.innerHTML += getMenuTemplate(menuListThree[index]);
    }
}
renderMenuThree();

// -------------------------------Basket-------------------------------------------

function renderBasket() {
    const basketRef = document.getElementById("basket-content");
    basketRef.innerHTML = getBasketContainerTemplate();

    const basketItemRef = document.getElementById("order-content");
    for (let index = 0; index < basket.length; index++) {
        basketItemRef.innerHTML += getBasketTemplate(index);
    }
    renderBasketSummary();
}

function addToBasket(menu) {
    const sameDish = basket.find((item) => item.title === menu.title);
    if (sameDish) {
        sameDish.amount++;
    } else {
        basket.push({
            title: menu.title,
            price: menu.price,
            amount: 1,
        });
    }
    renderBasket();
}

function addAmount(index) {
    basket[index].amount++;
    renderBasket();
}

function removeAmount(index) {
    if (basket[index].amount > 1) {
        basket[index].amount--;
    } else {
        basket.splice(index, 1);
    }
    renderBasket();
}

function totalBasketPrice() {
    let total = 0;
    
    for (let index = 0; index < basket.length; index++) {
        total += basket[index].price * basket[index].amount;
    }
    return total;
}

function renderBasketSummary() {
    const subtotal = totalBasketPrice();
    const deliveryFee = basket.length > 0 ? 4.99 : 0;
    const total = subtotal + deliveryFee;
    document.getElementById("subtotal").innerHTML =
    subtotal.toFixed(2).replace(".", ",")+"€";
    document.getElementById("deliveryFee").innerHTML =
    deliveryFee.toFixed(2).replace(".", ",")+"€";
    document.getElementById("total").innerHTML =
    total.toFixed(2).replace(".", ",")+"€";
    document.getElementById("buy-total").innerHTML = 
    total.toFixed(2).replace(".", ",")+"€";
}

function getRemoveFromBasket(index) {
    basket.splice(index, 1);
    renderBasket();
}

function openDialog(index) {
    document.body.style.overflow = "hidden";
    dialog.showModal();
    basket = [];
    renderBasket();
}

function closeDialog(index) {
    basket.splice(index, 1);
    document.body.style.overflow = "auto";
    dialog.close();
}