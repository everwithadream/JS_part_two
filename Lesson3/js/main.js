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

class ProductList {

  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    // this.render();
    this.fetchGoods().then((data) => {
      console.log(data)
      this.goods = data;
      this.render();
    });
  }

  fetchGoods() {
    getRequest(`${API}/catalogData.json`)
      .then (
        response => response => response.json(),
        error => console.log(err),
      )
      // console.log(data);
      // this.#goods = JSON.parse(data);
      // this.#render();
      // // console.log(this.#goods);
    }

  // fetchGoods() {
  //   return fetch(`${API}/catalogData.json`)
  //       .then(response => response.json())
  //       .catch((err) => console.log(err));
  // }

  sum() {
    return this.allProducts.reduce((sum, { price }) => sum + price, 0);
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);

      this.allProducts.push(productObject);
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

// class Busket {
//   constructor(container = '.busket') {
//     this.container = container;
//     this.goods = [];
//     this.allProducts = [];
//     this.fetchGoods().then((data) => {
//       console.log(data)
//       this.goods = data;
//       this.init();
//     });
//     this.addProduct().then((data) => {
//       console.log(data)
//       this.goods = data;
//     });
//     this.delProduct().then((data) => {
//       console.log(data)
//       this.goods = data;
//     });
//   }
//   fetchGoods() {
//     return fetch(`${API}/getBasket.json`)
//         .then(response => response.json())
//         .catch((err) => console.log(err));
//   }
//   addProduct(element){
//     return fetch(`${API}/addToBasket.json`)
//       .then(response => response.json())
//       .catch((err) => console.log(err));
//   }
//   delProduct(element) {
//     return fetch(`${API}/deleteFromBasket.json`)
//       .then(response => response.json())
//       .catch((err) => console.log(err));
//   }
//   init() {
//     const block = document.querySelector(this.container);
//     for (let product of this.goods) {
//       const productObject = new ItemBusket(product);
//       this.allProducts.push(productObject);
//       block.insertAdjacentHTML('beforeend', productObject.render());
//     }
//   }
// }

// class ItemBusket {
//   constructor(product, img = 'https://via.placeholder.com/50x100') {
//     this.title = product.product_name;
//     this.price = product.price;
//     this.id = product.id_product;
//     this.quantity = item.quantity;
//   }
//   render(){
//     return `<div class="cart-item" data-id="${this.id_product}">
//             <div class="product-bio">
//             <img src="${this.img}" alt="Some image">
//             <div class="product-desc">
//             <p class="product-title">${this.product_name}</p>
//             <p class="product-quantity">Количество: ${this.quantity}</p>
//         <p class="product-single-price">${this.price} за ед.</p>
//         </div>
//         </div>
//         <div class="right-block">
//             <p class="product-price">${this.quantity*this.price} ₽</p>
//             <button class="del-btn" data-id="${this.id_product}">&times;</button>
//         </div>
//         </div>`
//   }
// }

const list = new ProductList();
// let busket = new Busket();
