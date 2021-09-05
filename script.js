const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
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

renderGoodsList(goods);