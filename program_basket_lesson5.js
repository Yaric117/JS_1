'use strict'

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
]

let basket = {
  goodlist: [],

  countTotalPrice() {
    let totalPrice = 0
    for (let i = 0; i < this.goodlist.length; i++) {
      totalPrice += this.goodlist[i].count * this.goodlist[i].price
    }
    return totalPrice
  },

  totalNumber() {
    let totalNumber = 0
    for (let i = 0; i < this.goodlist.length; i++) {
      totalNumber += this.goodlist[i].count
    }
    return totalNumber
  },

  putProduct(prods, count) {
    let search = this.goodlist.findIndex(function (elem) {
      return elem.id === prods.id
    })

    if (search === -1) {
      this.goodlist.push(Object.assign({}, prods))
      this.goodlist[this.goodlist.length - 1].count = count
    } else {
      this.goodlist[search].count += count
    }
  },

  printBasketStatus() {
   baskeHtml.innerHTML =
  '<i class="fas fa-shopping-basket"></i> Товаров: ' +
  basket.totalNumber() +
  ' На сумму: ' +
  basket.countTotalPrice()
    
  }
}


function pushProducHtml() {
  let table = document.createElement('table')
  let tr = document.createElement('tr')
  for (let i = 0; i < products.length; i++) {
    let td = document.createElement('td')
    td.innerHTML =
      'id: ' +
      products[i].id +
      '<br>' +
      'Цена: ' +
      products[i].price +
      ' <br>' +
      'Брэнд: ' +
      products[i].brand +
      ' <br>' +
      'Тип: ' +
      products[i].article
    let button = document.createElement('button')
    button.className = 'btn'
    button.setAttribute('id', i)
    button.innerHTML = 'Купить'

    tr.appendChild(td)
    td.appendChild(button)
    
  }
  table.appendChild(tr)
  document.body.appendChild(table)
}
pushProducHtml()

 for (let i = 0; i < products.length; i++) {
  document.getElementById(i).addEventListener('click', function(){
    basket.putProduct(products[i], 1);
    basket.printBasketStatus();
  })
} 



let baskeHtml = document.createElement('span')
baskeHtml.className = 'basket'
baskeHtml.innerHTML =
  '<i class="fas fa-shopping-basket"></i> Товаров: ' +
  basket.totalNumber() +
  ' На сумму: ' +
  basket.countTotalPrice()
document.body.appendChild(baskeHtml)