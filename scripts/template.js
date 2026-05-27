function getMenuTemplate(menu){
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
                        <b>${menu.price.toFixed(2).replace(".",",")}€</b>    
                    <button class="menu-button">
                        Add to basket
                    </button>
                </div>
        </div>
    </div>
    `;
}