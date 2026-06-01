function init() {
    loadBasket();
    renderMenu();
    renderMenuTwo();
    renderMenuThree();
    renderBasket();
}

function saveBasket() {
    localStorage.setItem("basket", JSON.stringify(basket));
}

function loadBasket() {
    const data = localStorage.getItem("basket");
    if (data) {
        basket = JSON.parse(data);
    }
}

// -----------------------Menus rendern-------------------------------------------------
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

// --------------------------Basket--rendern------------------------
function renderBasket() {
    let positionToFixed = document.getElementById("order-content");
    let positionFix = 0;
    if (positionToFixed) {
        positionFix = positionToFixed.scrollTop;
    }

    const basketRef = document.getElementById("basket-content");
    basketRef.innerHTML = getBasketContainerTemplate();

    const basketItemRef = document.getElementById("order-content");
    for (let index = 0; index < basket.length; index++) {
        basketItemRef.innerHTML += getBasketTemplate(index);
    }
    basketItemRef.scrollTop = positionFix;
    renderBasketSummary();
    updateMobileBasket();
}

// -----------------------Zum Basket Dishes hinzufügen------------------
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
    saveBasket();
    renderBasket();
}

function addAmount(index) {
    basket[index].amount++;
    saveBasket();
    renderBasket();
}

function removeAmount(index) {
    if (basket[index].amount > 1) {
        basket[index].amount--;
    } else {
        basket.splice(index, 1);
    }
    saveBasket();
    renderBasket();
}

function totalBasketPrice() {
    let total = 0;
    for (let index = 0; index < basket.length; index++) {
        total += basket[index].price * basket[index].amount;
    }
    return total;
}

// --------------------Preise im Basket berechnen und anzeigen--------------------------------
function renderBasketSummary() {
    const subtotal = totalBasketPrice();
    const deliveryFee = basket.length > 0 ? 4.99 : 0;
    const total = subtotal + deliveryFee;
    document.getElementById("subtotal").innerHTML =
        subtotal.toFixed(2).replace(".", ",") + "€";
    document.getElementById("deliveryFee").innerHTML =
        deliveryFee.toFixed(2).replace(".", ",") + "€";
    document.getElementById("total").innerHTML =
        total.toFixed(2).replace(".", ",") + "€";
    document.getElementById("buy-total").innerHTML =
        total.toFixed(2).replace(".", ",") + "€";

    const btn = document.getElementById("buy-button");
    if (basket.length === 0) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

// -----------------------Dishes aus dem basket entfernen--------------------------------------
function getRemoveFromBasket(index) {
    basket.splice(index, 1);
    saveBasket();
    renderBasket();
}

// ----------------------PopUpWindow öffnen wenn die bestellung weg soll-----------------------
function openDialog(index) {
    document.body.style.overflow = "hidden";
    dialog.showModal();
    basket = [];
    saveBasket();
    renderBasket();
}
openBasketMobile();

// ----------------------PopUpWindow schließen---------------------------------
function closeDialog(index) {
    basket.splice(index, 1);
    document.body.style.overflow = "auto";
    dialog.close();
}
closeBasketMobile();

function openBasketMobile(){
    document.getElementById("basket-container")
    .classList.add("basket-mobile-open");
}

function closeBasketMobile(){
    document.getElementById("basket-container")
    .classList.add("basket-mobile-close");
}

function updateMobileBasket(){
    let totalAmount = 0;
    for (let index = 0; index < basket.length; index++) {
        totalAmount += basket[index].amount;
    }
    document.getElementById("mobile-cart").innerHTML = totalAmount;
}