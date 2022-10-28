'use strict';
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const arrowAsideClose = document.querySelector('.arrow-close');
const cardsContainer = document.querySelector('.cards-container');
const darken = document.querySelector('.darken');

const mobileMenuLine = document.querySelector('.mobile-menu ul:nth-child(1)');

// Declarando funciones para abrir y cerrar los contenedores
const toggleDesktopMenu = () => {
    shoppingCartContainer.classList.remove('show');
    desktopMenu.classList.toggle('inactive');
};

const toggleMobileMenu = () => {
    shoppingCartContainer.classList.remove('show');
    mobileMenu.classList.toggle('active');
    mobileMenuLine.classList.toggle('active');
    productDetailContainer.classList.remove('show');
    darken.classList.remove('show');
};

const toggleCarritoAside = () => {
    mobileMenu.classList.remove('active');
    mobileMenuLine.classList.remove('active');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('show');
    darken.classList.remove('show');
    shoppingCartContainer.classList.toggle('show');
};

const openProductDetailAside = () => {
    mobileMenu.classList.remove('active');
    mobileMenuLine.classList.remove('active');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.remove('show');

    productDetailContainer.classList.toggle('show');
    darken.classList.toggle('show');
};

const closeProductDetailAside = () => {
    productDetailContainer.classList.remove('show');
    darken.classList.remove('show');
};

// llamando eventos para abrir y cerrar los contenedores
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
arrowAsideClose.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
darken.addEventListener('click', closeProductDetailAside);

// Lista de productos
const productList = [];
productList.push ({
    name:'Volcanic stones',
    price: 69,
    image: 'https://images.pexels.com/photos/6560276/pexels-photo-6560276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'These massage stones can be used professionally or also you can use them at home.it can relieve tension and pain,relax muscles,improve blood circulation and promote metabolism,and effectively adjust the state of life and work.',
});
productList.push ({
    name:'Plant',
    price: 60,
    image: 'https://images.pexels.com/photos/1542937/pexels-photo-1542937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'The curves of the bowl bends the light that shines upon it. As if the glass isolates the outside world from what lies within. This simple design is somewhat mystical as it shields what lies within, yet also showing the treasures to all who look inside.',
});
productList.push ({
    name:'Pilates Ball',
    price: 49,
    image: 'https://images.pexels.com/photos/3757374/pexels-photo-3757374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Budha',
    price: 100,
    image: 'https://images.pexels.com/photos/4203074/pexels-photo-4203074.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Dried flowers',
    price: 20,
    image: 'https://images.pexels.com/photos/3865732/pexels-photo-3865732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Soy Candle',
    price: 15,
    image: 'https://images.pexels.com/photos/6311861/pexels-photo-6311861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Dry Body Brushing Set',
    price: 139,
    image: 'https://images.pexels.com/photos/6621281/pexels-photo-6621281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Tibetan Singing Bowl',
    price: 200,
    image: 'https://images.pexels.com/photos/8391651/pexels-photo-8391651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Esential Oil Diffuser',
    price: 120,
    image: 'https://images.pexels.com/photos/5380001/pexels-photo-5380001.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Buddhist Japa Mala Beads',
    price: 40,
    image: 'https://images.pexels.com/photos/10605935/pexels-photo-10605935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Yoga mat',
    price: 15,
    image: 'https://images.pexels.com/photos/6740756/pexels-photo-6740756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Roller & Gua Sha',
    price: 35,
    image: 'https://images.pexels.com/photos/6621435/pexels-photo-6621435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Matcha Tea Kit',
    price: 300,
    image: 'https://images.pexels.com/photos/8951765/pexels-photo-8951765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Japanese Painting Kit',
    price: 45,
    image: 'https://images.pexels.com/photos/8844004/pexels-photo-8844004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}); 
productList.push ({
    name:'Projector with white noises',
    price: 159,
    image: 'https://images.pexels.com/photos/2106768/pexels-photo-2106768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});
productList.push ({
    name:'Wooden Puzzle 3D',
    price: 49,
    image: 'https://images.pexels.com/photos/7296663/pexels-photo-7296663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});


// Declaración de selectores y array para Shopping Cart
const shoppingContainer = document.querySelector('.shopping-container');
const totalProduct = document.querySelector('.product-count');
const totalPrice = document.querySelector('.price-count');
const shoppingPriceProducts = [];

// Función para sunar el precio de los productos en el carrito
const addPriceProducts = arr => {
    let total = 0;
    arr.forEach(product => (total += product));
    return total;
};

// Agregar producto en 'Shopping Cart'
const addShopping = product => {
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');

    const shoppingFigure = document.createElement('figure');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.setAttribute('alt', product.name);
    shoppingFigure.appendChild(productImg);

    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = product.price;

    const removeIcon = document.createElement('img');
    removeIcon.setAttribute('src', './assets/icons/icon_close.png');
    removeIcon.setAttribute('alt', 'close');
    removeIcon.addEventListener('click', removeShopping);

    shoppingCart.appendChild(shoppingFigure);
    shoppingCart.appendChild(productName);
    shoppingCart.appendChild(productPrice);
    shoppingCart.appendChild(removeIcon);

    shoppingContainer.appendChild(shoppingCart);

    totalProduct.innerText = shoppingContainer.childElementCount;
    totalPrice.innerText =
        parseInt(totalPrice.textContent.substring(1)) + product.price;
    shoppingPriceProducts.push(product.price);

    totalPrice.innerText = `$${addPriceProducts(shoppingPriceProducts)}`;

    // Función para eliminar producto de 'Shopping Cart'
    function removeShopping() {
        shoppingCart.remove();
        totalProduct.innerText = shoppingContainer.childElementCount;

        const totalValue = document.querySelector('.price-count');
        const totalCurrentValue =
            parseInt(totalValue.textContent.substring(1)) - product.price;

        totalValue.innerText = `$${totalCurrentValue}`;
        shoppingPriceProducts.push(product.price - product.price * 2);
    }
};

// Función para poner los datos del producto seleccionado en la ventana de Detalles
const detailsProduct = product => {
    openProductDetailAside();

    const detailImage = document.querySelector('#productDetail>img');
    const detailPrice = document.querySelector('.product-info p:nth-child(1)');
    const detailName = document.querySelector('.product-info p:nth-child(2)');
    const detailDescription = document.querySelector(
        '.product-info p:nth-child(3)'
    );

    detailImage.setAttribute('src', product.image);
    detailPrice.innerText = `$${product.price}`;
    detailName.innerText = product.name;
    detailDescription.innerText = product.description;
};

// Función para agregar los productos en el main
const renderProducts = arr => {
    for (let product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.name);
        productImg.addEventListener('click', function () {
            detailsProduct(product);
        });

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
        productInfoFigure.addEventListener('click', function () {
            addShopping(product);
        });

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);

