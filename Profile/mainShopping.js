const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const body = document.querySelector('body');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const quantity = document.querySelector('.quantidade');
const total = document.querySelector('.total');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    { id: 1, name: 'QIX Chorão', image: '/shopping/02-2411114004.jpg', price: 289.99 },
    { id: 2, name: 'Adidas Campus', image: 'Campus.webp', price: 699.99 }, 
    { id: 3, name: 'Bape', image: 'f1d66264-f407-4279-8709-ed53048a73571-adcc16442b06d5ad3916803761937819-1024-1024.jpeg', price: 700.00 },
    { id: 4, name: 'Vans Old School', image: 'OldSchool.webp', price: 299.99 },
    { id: 5, name: 'Ous Roxo', image: 'OusRoxo.avif', price: 429.99 },
    { id: 6, name: 'Puma Suede', image: 'Puma_Suede.avif', price: 549.90 },
    { id: 7, name: 'QIX Retro', image: 'tenis_qix_retro_80s_mg_preto_preto_4313_1_8bbc4f511a26ab1bb7a48a020f37e8c6.webp', price: 230.00 },
    { id: 8, name: 'Tesla Coil Branco', image: 'tenis-tesla-coil-branco-furta-cor-01.webp', price: 259.28 },
    { id: 9, name: 'Adi Matic', image: '167253_adidas_OriginalsAdimatic_1.webp', price: 759.99 },
];

let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        if (value.name.includes('Santos Autografada')) {
            newDiv.classList.add('santosAA'); // destaca a camisa santos autografada
        } else if (value.name.includes('Brasil')) {
            newDiv.classList.add('brasilAA'); // destaca a camisa brasil
        }
        newDiv.innerHTML = `
            <img src="image/${value.image}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <div class="price">R$ ${value.price.toFixed(2)}</div>
            <button onClick="addToCard(${key})">Adicionar ao Carrinho</button>
        `;
        list.appendChild(newDiv);
    });
};

initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity += 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price * value.quantity;
            count += value.quantity;
            let newLi = document.createElement('li');
            newLi.innerHTML = `
                <div><img src="img/${value.image}" alt="${value.name}"></div>
                <div>${value.name}</div>
                <div class="count">
                    <button class="cardButton" onClick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div>${value.quantity}</div>
                    <button class="cardButton" onClick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                <div>R$ ${(value.price * value.quantity).toFixed(2)}</div>
            `;
            listCard.appendChild(newLi);
        }
    });

    total.innerText = `R$ ${totalPrice.toFixed(2)}`;
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
    }
    reloadCard();
}
