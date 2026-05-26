function renderMenu() {
    const burgerRef = document.getElementById("burger-menu");
    burgerRef.innerHTML = '';
    for (let index = 0; index < menuList.length; index++) {
        burgerRef.innerHTML += getMenuTemplate(menuList[index]);
    }
}
renderMenu();

function renderMenuTwo() {
    const pizzaRef = document.getElementById("pizza-menu");
    pizzaRef.innerHTML = '';
    for (let index = 0; index < menuListTwo.length; index++) {
        pizzaRef.innerHTML += getMenuTemplate(menuListTwo[index]);
    }
}
renderMenuTwo();

function renderMenuThree() {
    const saladRef = document.getElementById("salad-menu");
    saladRef.innerHTML = '';
    for (let index = 0; index < menuListThree.length; index++) {
        saladRef.innerHTML += getMenuTemplate(menuListThree[index]);
    }
}
renderMenuThree();