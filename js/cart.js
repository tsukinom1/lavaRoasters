//
// const buttonsAddToCart = document.querySelectorAll('.white-button')
// buttonsAddToCart.forEach(buttonAddToCart => {
//     buttonAddToCart.addEventListener('click', (e) => {
//
//     })
// }
const cartWrapper = document.querySelector('.cart-wrapper');

//блок с надписью "Корзина пуста"
const cartEmptyBadge = document.querySelector('[data-cart-empty]');

const orderBlock = document.getElementById('orderBlock');




function toggleCartStatus() {
    if (cartWrapper.children.length > 0) {
        cartWrapper.style.border = '1px solid #9B6842';
        cartEmptyBadge.classList.add('none');
        orderBlock.classList.remove('none');
    } else {
        cartWrapper.style.border = 'none';
        cartEmptyBadge.classList.remove('none');
        orderBlock.classList.add('none');
    }
}


function calcCartPriceAndDelivery(){

    const cartItems = document.querySelectorAll('.cart-item')
    let priceTotal = 0;

    const TotalPrice = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const dataCartDelivery = document.querySelector('[data-cart-delivery]');

    cartItems.forEach(item => {


        const amountEl1 = item.querySelector('[data-counter]')
        const priceEl1 = item.querySelector('.price__currency')

        const currentPrice = parseInt(amountEl1.innerText) * parseInt(priceEl1.innerText)
        priceTotal += currentPrice;

    })

    TotalPrice.innerText = priceTotal;
    if(priceTotal >0){
        dataCartDelivery.classList.remove('none');
    }

    if(priceTotal >= 800){
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'Бесплатно';
    }
    else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽'
    }
}

window.addEventListener('click', (e) => {
    let counter;
    if (e.target.dataset.action === "plus" || e.target.dataset.action === "minus") {
        const counterWrapper = e.target.closest(".counter-wrapper");
        counter = counterWrapper.querySelector(`[data-counter]`)
    }
    if (e.target.dataset.action === "plus") {
        counter.innerHTML = ++counter.innerText;
    }

    if (e.target.dataset.action === "minus") {

        if (parseInt(counter.innerText) > 1) {
            counter.innerHTML = --counter.innerText;
        } else if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            e.target.closest('.cart-item').remove();
            toggleCartStatus();
            calcCartPriceAndDelivery();
        }

    }

    if(e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')){
        calcCartPriceAndDelivery();
    }


    if (e.target.hasAttribute('data-cart')) {
        const card = e.target.closest('.cart__product__card');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.cart__product__card-img').getAttribute('src'),
            title: card.querySelector('.cart__product__card-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        }

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        if (itemInCart) {
            const counterOfItem = itemInCart.querySelector('[data-counter]');
            counterOfItem.innerText = parseInt(counterOfItem.innerText) + parseInt(productInfo.counter);
        } else {

            const cartItemHTML = `
        <div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                <img src="${productInfo.imgSrc}" alt="">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
                    <div class="cart-item__details">
                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }


        card.querySelector('[data-counter]').innerText = 1;

        toggleCartStatus();

        calcCartPriceAndDelivery();
    }

})