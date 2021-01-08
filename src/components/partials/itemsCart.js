import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';
import { addToCart, deleteFromCart } from './datastore';

class CartPageItem extends Component {
  constructor(props) {
    super();
    this.state = {
      total: props.item.prod_qty * props.item.prod_price
    };
    this.getTotal = this.getTotal.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item) this.setState({ total: nextProps.item.prod_qty * nextProps.item.prod_price });
  }
  getTotal(qty) {
    const newTotal = this.props.item.prod_price * Number(qty);
    this.setState({ total: newTotal });
    addToCart(this.props.item, qty);
    this.props.updateTotal();
  }

  deleteItem() {
    deleteFromCart(this.props.item);
    this.props.updateTotal();
  }

  starRating(param){
    let myvar=[];
    for(var i=0; i<=4; i++){
      if(param<=i){
        myvar.push(<span className="fa fa-star" key={i}></span>);
      }else{
        myvar.push(<span className="fa fa-star checked" key={i}></span>);
     }
    }
    return myvar;
  }

  cartPageLayout(item){
    return (<div className="container-fliud">
      <div className="wrapper row">
        <div className="preview col-md-6">
          <div className="preview-pic tab-content">
            <div className="tab-pane active" id="pic-1"><img src={item.prod_image.medium} width="100%" alt="Not found" /></div>
          </div>
        </div>
        <div className="details col-md-6">
          <h3 className="product-title">{item.prod_name}</h3>
          <div className="rating">
            <div className="stars">
                {this.starRating(item.prod_rating)} <strong>({item.prod_rating})</strong> | <span className="review-no"><strong>Reviews: </strong> {item.prod_reviews}</span>
            </div>

          </div>
          <p className="product-category"><strong>Category:</strong> {item.prod_category}</p>
          <p className="product-description"><strong>Short Description:</strong> {item.prod_shortdesc}</p>

          <div className="row">
            <div className="d-flex col-12 pb-3">
              <Counter
                item={item}
                qty={item.prod_qty}
                getTotal={this.getTotal}
              />
              <button className="btn btn-sm btn-danger ml-1 decrement" onClick={this.deleteItem}><span className="fa fa-trash" /></button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p><strong>Subtotal:</strong> ${this.state.total}</p>
            </div>
            <div className="col">
              <p><strong>Price:</strong> ${item.prod_price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }

  cartWidgetLayout(item){
    return (<div className="row">
        <div className="col-8">
          <h6 className="my-0">{item.prod_name}</h6>
          <small className="text-muted">
            <span className="badge badge-success">3 ★</span> | Qty: <strong>({item.prod_qty})</strong>
          </small>
        </div>
        <div className="col-4">
          <span className="text-muted">${item.prod_price}</span>
        </div>
      </div>)
  }

  layoutRenderer(item){
    if(this.props.layoutType === "widget"){
      return this.cartWidgetLayout(item);
    }else{
      return  this.cartPageLayout(item);
    }
  }

  render() {
    const { item } = this.props;
    return (
      <li className="list-group-item justify-content-between lh-condensed">
        {this.layoutRenderer(item)}
      </li>
    );
  }
}

CartPageItem.propTypes = {
  item: PropTypes.shape({
    prod_id: PropTypes.string,
    prod_name: PropTypes.string,
    guid: PropTypes.string,
    prod_incart: PropTypes.bool,
    prod_category: PropTypes.string,
    prod_price: PropTypes.number,
    prod_qty: PropTypes.number,
    prod_reviews: PropTypes.number,
    prod_image: PropTypes.object,
    prod_rating: PropTypes.number,
    prod_color: PropTypes.string,
    prod_shortdesc: PropTypes.string,
    prod_longdesc: PropTypes.string
  }),
};

CartPageItem.defaultProps = {
  item: PropTypes.shape({
    prod_id: '',
    prod_name: '',
    guid: '',
    prod_incart: false,
    prod_category: '',
    prod_price: 0,
    prod_qty: 0,
    prod_reviews: 0,
    prod_image: {
      'large': '',
      'medium': '',
      'small': ''
    },
    prod_rating: 0,
    prod_color: '',
    prod_shortdesc: '',
    prod_longdesc: ''
  })
};

export { CartPageItem }
