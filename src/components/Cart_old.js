import React, {Component} from 'react';
import { siteConfig } from '../config';
import '../App.css';
import {cartList} from './Main';

let isd = {};
let arrayofIncartTrue = {};
let cartItems = [];
let listforms = [{dd:"4",2:"5"},{1:"4",2:"5"}];
let idlist = [];
let pricelist = [];
let sumr = {};
var numbers = [{}];
let g = 9;
let loc = 0;

console.log(loc);
class Cart extends Component{
  constructor(props){
    super(props);

    this.state = {
      filteredProducts: [],
    };
  }


 componentDidMount(){
   fetch(siteConfig.prodData)
   .then(results => {
     return results.json();
   }).then(data => {

  //console.log(data);

  arrayofIncartTrue = data.filter(obj => {
    return obj.prod_incart === true
  })

  cartItems = arrayofIncartTrue;

const iums = cartList.map(item => item.prod_id);
var myStringArray = iums;
var arrayLength = myStringArray.length;

for (var i = 0; i < myStringArray.length; i++) {
    let prod_id = data.find(prod => prod.prod_id === myStringArray[i] ).prod_id,
        prod_name = data.find(prod => prod.prod_id === myStringArray[i] ).prod_name,
        prod_price = data.find(prod => prod.prod_id === myStringArray[i] ).prod_price,
        prod_rating = data.find(prod => prod.prod_id === myStringArray[i] ).prod_rating,
        prod_reviews = data.find(prod => prod.prod_id === myStringArray[i] ).prod_reviews,
        prod_image = data.find(prod => prod.prod_id === myStringArray[i] ).prod_image;
     let elem = {prod_id, prod_name, prod_price, prod_rating, prod_reviews, prod_image};
     numbers.push(elem);
}

numbers.shift()

  //console.log(listforms);
  Array.prototype.push.apply(cartItems,numbers);

  this.setState({filteredProducts: this.cartItems});

console.log(numbers);
console.log(cartItems);
const iw = cartItems.map(item => item.prod_price);
const sumr = iw.reduce(add,0);
function add(accumulator, a) {
    return accumulator + a;
}
isd.total = sumr;
localStorage.setItem('totalprice', JSON.stringify(sumr));

console.log(sumr);
   })
 }

  _renderCarts(){
   return Object.entries(cartItems).map(([key, value], i) => {
     return (
       <div className="row" key={key}>
         <div class="container">
           <table class="table">
             <tbody>
               <tr>
                 <td><img src={value.prod_image.small} width="100px" height="75px"/></td>
                 <td>
                   <h5  style={{color:'#cc0000'}}>{value.prod_name}</h5>

                   <small className="text-muted">Rating: <span className="badge badge-success">{value.prod_rating} &#9733;</span></small>
                   <small className="text-muted">Reviews: ({value.prod_reviews})</small>
                </td>
                 <td style={{color:'#cc0000'}}>${value.prod_price}</td>
               </tr>
             </tbody>
           </table>
         </div>

      </div>
     )
   });
}



totalPrice(){

 const idlist = cartItems.map(item => item.prod_id);
 const pricelist = cartItems.map(item => item.prod_price);
 const sumr = pricelist.reduce(add,0);
 function add(accumulator, a) {
     return accumulator + a;
 }

 return(
    <div className="cardincartpricebox">
      <p className="price"> Subtotal (<span  style={{color:'#cc0000'}}>{idlist.length} </span>items): <span  style={{color:'#cc0000'}}>${sumr}</span></p>
      <p><button className="btn btn-primary">Proceed to Buy</button> </p>
    </div>
 )
}


  render(){
    return (
      <div>
        <div className="row" style={{backgroundColor: "aliceblue"}}>
        <h3 style={{margin: "auto", color:"darkgrey"}}> Items In Your Shopping Cart</h3>
        </div>

       <div className="row">
         <div className="col-md-8">{this._renderCarts()}</div>
        <div className="col-md-4">{this.totalPrice()}</div>
       </div>
        {this.state.filteredProducts}
      </div>
    );
  }
}

export default Cart;
