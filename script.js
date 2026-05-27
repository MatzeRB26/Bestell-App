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