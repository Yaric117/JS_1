'use strict'

//1

/* let a = 288;
let b;
let c = [];

function getObjectsFromInt(a) {
    if (a > 999) {
        console.log(a + ' - значение превышает "999"');
    } else {
        let b;
        let c = [];
        for (let i = 0; a > 0; i++) {
            b = (a % 10);
            a = (a - b) * 0.1;
            c[i] = b;
        }
        c.reverse();
        let d = {
            hundreds: Number(c[0]),
            tens: Number(c[1]),
            units: Number(c[2])
        };
        console.log(d);
    }
}

getObjectsFromInt(a); */

//сначала попробовал массив 'c' скопировать в 'd' при помощи
//Object.assign, но даже при созданном массиве 'd' 
//c заранее прописанными наименованиями свойств 
//Object.assign меняет их на свои, т.е на 0,1,2.....
// потом пришел к такой записи свойств объекта 'd'.
//Можно ли ка-то динамически менять нименование
//свойств созданного объекта?

//2.

/* --------Products----------- */

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

let basket_products = [];
products.forEach(function (item) {
    if (item.id % 2 === 0) {
        basket_products.push(item);
    }
});

/* -------Basket------- */
let basket = {
    goodlist: [],

    countTotalPrice() {
        let sum = 0;
        basket_products.forEach(function (item) {
            sum += +item.price;
        });
        console.log("Общая сумма товаров: " + sum +" руб.");
    },
    countTotalNumber() {
        console.log("Количество товаров в корзине: " + basket_products.length);
    },
    putProduct() {
        this.goodlist = basket_products;
        for(let key of basket_products){
            console.log('Товар: '+ key.brand + " По цене: " + key.price + ' руб.');
           
        }

        

    }
};

basket.countTotalPrice()
basket.countTotalNumber();
basket.putProduct();

//???не совсем понятно, как реализовать функционал 'count' в данном случае