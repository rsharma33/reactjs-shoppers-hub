//import { Component } from 'react';
import { ItemList2 } from './fakedata';

const storageNameCart = 'Cart';
const storageNameitems = 'ItemList';

const initItemList = () => {
  localStorage[storageNameitems] = JSON.stringify(ItemList2);
};

const getItemList = () => {
  if (localStorage[storageNameitems]) return JSON.parse(localStorage[storageNameitems]);
  return [];
};

const getCart = () => {
  if (localStorage[storageNameCart]) return JSON.parse(localStorage[storageNameCart]);
  return [];
};

const checkIfInCart = (item) => {
  let cart = getCart();
  let index = "";
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].prod_id === item.prod_id) {
      index = cart[i].prod_incart;
      break;
    }
  }
  return index.toString();
};

const cartItemsCount = () => {
  let cartCount = getCart();
  return cartCount.length;
};

const calculateTotal = () => {
  const cart = getCart();
  return cart.length !== 0 ?
    cart.map((item) => { return item.prod_qty * item.prod_price; })
      .reduce((sum, num) => { return sum + num; }) : 0;
};

const getIndex = (item, cart) => {
  let index = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].prod_id === item.prod_id) {
      index = i;
      break;
    }
  }
  return index;
};

const addToCart = (item, qty) => {
  const cart = getCart();
  const index = getIndex(item, cart);
  if (index === -1) {
    const updateItem = JSON.parse(JSON.stringify(item));
    updateItem.prod_qty = qty;
    updateItem.prod_incart = true;
    cart.push(updateItem);
  } else {
    cart[index].prod_qty = qty;
  }
  localStorage[storageNameCart] = JSON.stringify(cart);
};

const deleteFromCart = (item) => {
  const cart = getCart();
  const index = getIndex(item, cart);
  cart.splice(index, 1);
  localStorage[storageNameCart] = JSON.stringify(cart);
};

export {initItemList, getItemList, getCart, getIndex, addToCart, deleteFromCart, cartItemsCount, calculateTotal, checkIfInCart}
