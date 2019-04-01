'use strict'
//два дня искал ошибку, не пойму почему NaN?

let products = [{
        id: 20,
        article: 'sneakers',
        brand: 'nike',
        price: 2500
    },
    {
        id: 12,
        article: 'sneakers',
        brand: 'addidas',
        price: 1800
    },
    {
        id: 4,
        article: 'sneakers',
        brand: 'new balance',
        price: 7900
    },
    {
        id: 369,
        article: 'sneakers',
        brand: 'quicksilver',
        price: 4100
    }
];

let basket = {
    goodlist: [],

    countTotalPrice() {
        let totalPrice;
        for (let i = 0; i < this.goodlist.length; i++) {
            totalPrice += this.goodlist[i] * this.goodlist[i].price;
        }
        console.log('Общая сумма: ' + totalPrice + ' руб.');
        return totalPrice;
    },

    totalNumber() {
        let totalNumber;
        for (let i = 0; i < this.goodlist.length; i++) {
            totalNumber += this.goodlist[i];
        }
        console.log('Товаров в корзине: ' + totalNumber);
        return totalNumber;
    },

    putProduct(prods, count) {
        let search = this.goodlist.findIndex(function (elem) {
            return elem.id === prods.id;
        });

        if (search === -1) {
            this.goodlist.push(Object.assign({}, prods));
            this.goodlist[this.goodlist.length - 1] = count;
        } else {
            this.goodlist[search].count += count;
        }


    }

};

for (let i = 0; i < products.length; i += 2) {
    basket.putProduct(products[i], 1);
}
for (let i = 2; i < products.length; i += 2) {
    basket.putProduct(products[i], 2);
};

console.log(basket.goodlist);
basket.countTotalPrice();
basket.totalNumber();

let baskeHtml = document.createElement("span");
baskeHtml.innerHTML = '<i class="fas fa-shopping-basket"></i> Товаров: ' + basket.totalNumber() + ' На сумму: ' + basket.countTotalPrice();
document.body.appendChild(baskeHtml);