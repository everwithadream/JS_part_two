class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this._render();
    this._goodsListTotal();
  }

  _fetchGoods() {
    this._goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this._goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  _goodsListTotal() {
    let totalPrice = 0;
    for (let i = 0; i < this._goods.length; i++) {
    let {price = 0} = this._goods[i];
    totalPrice = price + totalPrice;
  }
  console.log(totalPrice);
  }
}

class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
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

const list = new ProductList();