const goods = [
  {id: 1, title: 'Shirt', price: 150 },
  {id: 2, title: 'Socks', price: 50 },
  {id: 3, title: 'Jacket', price: 350 },
  {id: 4, title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price) => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><button class="by-btn">Добавить</button></div>`;
};

const renderGoodsList = list => {
  let goodsList = "";
  for (let i = 0; i < list.length; i++) {
    let {title = "пусто", price = "пусто"} = list[i];
    goodsList = goodsList + renderGoodsItem(title, price);
  }
  document.querySelector('.goods-list').innerHTML = goodsList;
};

const goodsListTotal = list => {
  let totalPrice = 0;
  for (let i = 0; i < list.length; i++) {
    let {price = 0} = list[i];
    totalPrice = price + totalPrice;
  }
  console.log(totalPrice);
}

class BusketItem {
  busketItemCount () {
    //Метод показывающий количество одного типа товаров в корзине.
  }
  busketItemsPrice () {
    //метод показывающий сумму одинаковых товаров элемента в корзине
  }
}

class basket {
  goodsBasketPrice() {
    // Метод для подсчета суммы заказа в корзине.
  }
  goodsBacketCount() {
    //Метод подсчета количества товаров в корзине.
  }
  goodsBasketImg () {
    //Метод показывающий последнюю картинку товара в корзине.
  }
}

renderGoodsList(goods);
goodsListTotal(goods);
