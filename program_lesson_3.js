'use strict'
/* //1
let a = [
    [{
        name: 'Mary',
        age: 23
    }, {
        name: 'Mike',
        age: 45
    }, {
        name: 'Nick',
        age: 11
    }],
    [{
        name: 'Adam',
        age: 56
    }, {
        name: 'Sara',
        age: 21
    }, {
        name: 'Don',
        age: 22
    }],
    [{
        name: 'Karl',
        age: 34
    }, {
        name: 'Marta',
        age: 76
    }, {
        name: 'John',
        age: 19
    }]
];

let b = Object.assign({}, a);
console.log(b); //данный объект уже является не массивом, 
//и поэтому forEach не работает, как я понимаю, правильно?
/* b.forEach(function (item) {
    console.log(item);
}); */

//2

let basket = [{
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

function countBasketPrice(basket) {
    let sum = 0;
    basket.forEach(function (item) {
        sum += +item.price;
    });
    console.log(sum);

}
countBasketPrice(basket);