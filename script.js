let basket = [];

function renderDishes(list, category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        container.innerHTML += getMenuTemplate(list[i], category, i);
    }
}

function init() {
    loadBasket();
    renderDishes(menuList, "burger", "burger-dishes");
    renderDishes(menuListTwo, "pizza", "pizza-dishes");
    renderDishes(menuListThree, "salad", "salad-dishes");
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

// --------------------------Basket-rendern------------------------
function renderBasket() {
    const content = document.getElementById("basket-content");
    if (basket.length === 0) {
        content.innerHTML = getEmptyBasketTemplate();
    } else {
        content.innerHTML = getBasketContainerTemplate();
        renderBasketItems();
        updateBasketTotals();
    }
    updateBasketContent("basket-content");
    updateBasketContent("basket-mobile-content");
    updateMobileBadge();
}

function updateBasketContent(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (basket.length === 0) {
        container.innerHTML = getEmptyBasketTemplate();
    } else {
        container.innerHTML = getBasketContainerTemplate();
        renderItemsInContainer(containerId);
        updateBasketTotals();
    }
}

function renderItemsInContainer(containerId) {
    const list = document.getElementById(containerId).querySelector(".order-items-list");
    if (!list) return;
    list.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
        list.innerHTML += getBasketItemTemplate(i);
    }
}

function renderBasketItems() {
    const list = document.getElementById("order-items-list");
    list.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
        list.innerHTML += getBasketItemTemplate(i);
    }
}

function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + "€";
}

// -----------------------Zum Basket Gerichte hinzufügen------------------
function addToBasket(category, index) {
    const dish = getDish(category, index);
    const itemInBasket = basket.find((item) => item.title === dish.title);
    if (itemInBasket) {
        itemInBasket.amount++;
    } else {
        basket.push({
            title: dish.title,
            price: dish.price,
            amount: 1,
        });
    }
    saveBasket();
    renderBasket();
}

function getDish(category, index){
    if (category === `burger`) return menuList[index];
    if (category === `pizza`) return menuListTwo[index];
    if (category === `salad`) return menuListThree[index];
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

function deleteFromBasket(index) {
    basket.splice(index, 1);
    saveBasket();
    renderBasket();
}
// --------------------Preise im Basket berechnen und anzeigen--------------------------------
function calculateSubTotal() {
    let subtotal = 0;
    for (let i = 0; i < basket.length; i++) {
        subtotal += basket[i].price * basket[i].amount;
    }
    return subtotal;
}

function updateBasketTotals() {
    const subtotal = calculateSubTotal();
    const delivery = 4.99;
    const total = subtotal + delivery;

    document.querySelectorAll("[id='subtotal']").forEach(el => el.innerHTML = formatPrice(subtotal));
    
    document.querySelectorAll("[id='delivery']").forEach(el => el.innerHTML = formatPrice(delivery));
    
    document.querySelectorAll("[id='total']").forEach(el => el.innerHTML = formatPrice(total));
    
    document.querySelectorAll("[id='buy-total']").forEach(el => el.innerHTML = formatPrice(total));
}

// -------------PopUpWindow öffnen wenn die bestellung weg soll-----------------------
function openDialog() {
    const dialog = document.getElementById("dialog");
    basket = [];
    document.body.style.overflow = "hidden";
    dialog.showModal();
    saveBasket();
    renderBasket();
}

// ----------------------PopUpWindow schließen---------------------------------
function closeDialog() {
    const dialog = document.getElementById("dialog");
    document.body.style.overflow = "auto";
    dialog.close();
}
// --------------------------------------------------------------
function openBasketMobile() {
    const basketMobile = document.getElementById("basket-mobile");
    basketMobile.style.display = 'flex';
    document.body.style.overflow = "hidden";
}

function closeBasketMobile() {
    const basketMobile = document.getElementById("basket-mobile");
    basketMobile.style.display = 'none';
    document.body.style.overflow = "auto";
}

function toggleBasketMobile(){
    const dialog = document.getElementById("basket-mobile");
    if (dialog.style.display === "flex"){
        closeBasketMobile(); 
    } else {
        openBasketMobile();
    }
}

function updateMobileBadge() {
    let count = 0;
    for (let i = 0; i < basket.length; i++) {
        count += basket[i].amount;
    }
    const mobileCart = document.getElementById("mobile-cart");
    if (mobileCart) {
        mobileCart.innerHTML = count;
    }
}
