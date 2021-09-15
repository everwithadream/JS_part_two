const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// only promise without fetch
// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//          console.log(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// };

let getRequest = (url) => {
  return new Promise ((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        console.log(xhr.readyState);
        if (xhr.status === 200) {
          resolve(xhr.responseText);
          console.log(xhr.responseText);
        } else {
          reject(console.log('Error'));
        }
      }
    }
  xhr.send();
  })
};

console.log(getRequest);

class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];
    this.#fetchGoods();
  }

  // #fetchGoods() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     console.log(data);
  //     this.#goods = JSON.parse(data);
  //     this.#render();
  //     console.log(this.#goods);
  //   });
  //}

  #fetchGoods() {
    let data = getRequest(`${API}/catalogData.json`)
    console.log(data);
    this.#goods = JSON.parse(data);
    this.#render();
    console.log(this.#goods);
  }

  sum() {
    return this.#allProducts.reduce((sum, { price }) => sum + price, 0);
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
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

const list = new ProductList();

// class ProductList {
//   constructor(container = '.products') {
//     this.container = container;
//     this._goods = [];
//     this._allProducts = [];
//
//     this._fetchGoods();
//     this._render();
//   }
//
//   _fetchGoods() {
//     this._goods = [
//       {id: 1, title: 'Notebook', price: 20000},
//       {id: 2, title: 'Mouse', price: 1500},
//       {id: 3, title: 'Keyboard', price: 5000},
//       {id: 4, title: 'Gamepad', price: 4500},
//     ];
//   }
//
//   _render() {
//     const block = document.querySelector(this.container);
//
//     for (let product of this._goods) {
//       const productObject = new ProductItem(product);
//
//       this._allProducts.push(productObject);
//       block.insertAdjacentHTML('beforeend', productObject.render());
//     }
//   }
// }
//
// class ProductItem {
//   constructor(product, img = 'https://via.placeholder.com/200x150') {
//     this.title = product.title;
//     this.price = product.price;
//     this.id = product.id;
//     this.img = img;
//   }
//
//   render() {
//     return `<div class="product-item" data-id="${this.id}">
//               <img src="${this.img}" alt="Some img">
//               <div class="desc">
//                   <h3>${this.title}</h3>
//                   <p>${this.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//   }
// }
//
// const list = new ProductList();
// list.fetchGoods();
// list.render();

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://via.placeholder.com/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
