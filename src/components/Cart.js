import React, {Component} from 'react';
import { Carousel } from './Common';
import { CartPageItem } from '../components/partials/itemsCart';
import { getCart, cartItemsCount, calculateTotal } from '../components/partials/datastore';

//import { siteConfig } from '../config';
class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: this.calculateTotal(),
      cartItemsCount: this.cartItemsCountTotal()
    };
    this.updateTotal = this.updateTotal.bind(this);
  }

  getItemForCartComponents() {
    return getCart().map((item) => (<CartPageItem
      key={item.prod_id}
      item={item}
      updateTotal={this.updateTotal}
    />));
  }

  cartItemsCountTotal() {
    const cartCount = getCart();
    return cartCount.length;
  }

  calculateTotal() {
    const cart = getCart();
    return cart.length !== 0 ?
      cart.map((item) => { return item.prod_qty * item.prod_price; })
        .reduce((sum, num) => { return sum + num; }) : 0;
  }

  updateTotal() {
    this.setState({ total: this.calculateTotal() });
    this.setState({ cartItemsCount: this.cartItemsCountTotal() });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 p-0"><Carousel /></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <aside className="sidebar-left col-lg-3">
                  <CartWidget />
                  {/* end: Category Section */}

                </aside>
                {/* end: aside.sidebar-left */}

                <section className="static-content col-lg-9">
                  <ul className="list-group mb-3">
                    <li className="list-group-item justify-content-between lh-condensed">
                      <h2>Your Cart {this.cartItemsCountTotal() ? "("+this.cartItemsCountTotal()+")" : "" }</h2>
                    </li>

                    {this.cartItemsCountTotal() ? "" : <li className="list-group-item justify-content-between lh-condensed">No items in Cart... Please add products in your cart.</li> }
                    {/* Shows Cart as empty if no items in cart */}

                    {this.getItemForCartComponents()} {/* Shows itemList */}

                    <li className="list-group-item justify-content-between lh-condensed3">
                      <h3>Total: <small>${this.state.total}</small></h3>
                    </li>
                  </ul>
                </section>
                {/* end: section.productile */}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

class CartWidget extends Component{
  getItemForCartWidget() {
    return getCart().map((item) => (<CartPageItem
      key={item.prod_id}
      item={item}
      updateTotal={this.updateTotal}
      layoutType="widget"
    />));
  }

  render(){
    return (
      <section className="cart-summary col-md-12">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge badge-secondary badge-pill">{ cartItemsCount() }</span>
        </h4>

        <ul className="list-group mb-3">
          {this.getItemForCartWidget()}
          <li className="list-group-item d-flex justify-content-between">
            <span>Total:</span>
            <strong>${ calculateTotal() }</strong>
          </li>
        </ul>
      </section>
    )
  }
}

export { CartWidget, Cart };
