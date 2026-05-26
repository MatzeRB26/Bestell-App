function getMenuTemplate(menu){
    return `
    <div class="menu-card">
        <div class="menu-img">
            <img src="${menu.imgPath}">
        </div>

        <div class="menu-content">
            <div class="menu-header">
                <div class="menu-title">
                    <h3>${menu.title}</h3>
                </div>
                <div class="menu-price">
                    <p>
                        <b>${menu.price.toFixed(2).replace(".",",")}€</b>    
                    </p>
                </div>
            </div>
            <div class="menu-description">
                <p>${menu.description}</p>
            </div>
            <div class="menu-footer">
                <button class="menu-button">
                    Add to basket
                </button>
            </div>
        </div>
    </div>
    `;
}