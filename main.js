'use strict';
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.ham-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.inactive');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShopMenu);
productDetailCloseIcon.addEventListener('click', closeMenuIcon);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleShopMenu() {
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeMenuIcon() {
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push ({
    name:'Volcanic stones',
    price: 69,
    image: 'https://images.pexels.com/photos/6560276/pexels-photo-6560276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Plant',
    price: 60,
    image: 'https://images.pexels.com/photos/1542937/pexels-photo-1542937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Pilates Ball',
    price: 49,
    image: 'https://images.pexels.com/photos/3757374/pexels-photo-3757374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Budha',
    price: 100,
    image: 'https://images.pexels.com/photos/4203074/pexels-photo-4203074.jpeg'
});
productList.push ({
    name:'Dried flowers',
    price: 20,
    image: 'https://images.pexels.com/photos/3865732/pexels-photo-3865732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Soy Candle',
    price: 15,
    image: 'https://images.pexels.com/photos/6311861/pexels-photo-6311861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Dry Body Brushing Set',
    price: 139,
    image: 'https://images.pexels.com/photos/6621281/pexels-photo-6621281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Tibetan Singing Bowl',
    price: 200,
    image: 'https://images.pexels.com/photos/8391651/pexels-photo-8391651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Esential Oil Diffuser',
    price: 120,
    image: 'https://images.pexels.com/photos/5380001/pexels-photo-5380001.jpeg'
});
productList.push ({
    name:'Buddhist Japa Mala Beads',
    price: 40,
    image: 'https://images.pexels.com/photos/10605935/pexels-photo-10605935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Yoga mat',
    price: 15,
    image: 'https://images.pexels.com/photos/6740756/pexels-photo-6740756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Roller & Gua Sha',
    price: 35,
    image: 'https://images.pexels.com/photos/6621435/pexels-photo-6621435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Matcha Tea Kit',
    price: 300,
    image: 'https://images.pexels.com/photos/8951765/pexels-photo-8951765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Japanese Painting Kit',
    price: 45,
    image: 'https://images.pexels.com/photos/8844004/pexels-photo-8844004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}); 
productList.push ({
    name:'Projector with white noises',
    price: 159,
    image: 'https://images.pexels.com/photos/2106768/pexels-photo-2106768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name:'Wooden Puzzle 3D',
    price: 49,
    image: 'https://images.pexels.com/photos/7296663/pexels-photo-7296663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


productList.map(function (product){ 
    const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
  });




