import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Counter from './counter';
import { siteConfig } from '../../config';
import { addToCart, checkIfInCart } from './datastore';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images= siteConfig.tempLargeImages;

export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      photoIndex: 0,
      isOpen: false,
      qty: 1,
      buttonName: 'Add to Cart',
      buttonState: '',
      buttonClass: 'btn btn-sm float-right addToCart btn-primary',
      inCart: ''
    };
    this.addToCart = this.addToCart.bind(this);
    this.setQty = this.setQty.bind(this);
  }

  setQty(newQty) {
    this.setState({ qty: newQty });
  }

  buttonStateUpdate(){
    this.setState({ buttonName: "Added to Cart"});
    this.setState({ buttonState: "Disabled"});
    this.setState({ buttonClass: "btn btn-sm float-right addToCart btn-danger"});
  }

  addToCart() {
    addToCart(this.props.item, this.state.qty);
    this.buttonStateUpdate();
  }

  cartButton(){
    let inCartFlag = checkIfInCart(this.props.item);
    if(inCartFlag !== 'true'){
      return (<button disabled={this.state.buttonState} className={this.state.buttonClass} onClick={this.addToCart}><i className="fas fa-cart-plus"></i> {this.state.buttonName}</button>)
    }else{
      return (<button disabled='disabled' className="btn btn-sm float-right addToCart btn-danger" onClick={this.addToCart}><i className="fas fa-cart-plus"></i> Added to Cart</button>)
    }
  }

  render() {
    const { item } = this.props;
    const { photoIndex } = this.state;

    return (
      <div className="col-lg-4 col-md-6 mb-4 item">
           <div className="card h-100 product-card">
             <img className="card-img-top featurette-image img-fluid mx-auto" src={item.prod_image.small} alt={item.prod_id}  onClick={() => this.setState({ isOpen: true })} />
             {this.state.isOpen && (
                  <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                      })
                    } />
                )}
             <div className="card-body iteminfo">
               <h6 className="card-title">{item.prod_name}</h6>
               <h5>${item.prod_price}</h5>
               <Counter item={item} qty={1} setQty={this.setQty} />

               {/* <p className="card-text">{item.prod_shortdesc}</p> */}
               <small className="text-muted">Rating: <span className="badge badge-success">{item.prod_rating} &#9733;</span> | Reviews: ({item.prod_reviews})</small>
             </div>
             <div className="card-footer">
                <Link to={`/Productdetails/${item.prod_id}`} className="btn btn-primary btn-sm float-left"><i className="fas fa-info-circle"></i> Details</Link>
                {this.cartButton()}
             </div>
           </div>
      </div>
    );
  }
}

Item.propTypes = {
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

Item.defaultProps = {
  item: PropTypes.shape({
    prod_id: '',
    prod_name: '',
    guid: '',
    prod_incart: false,
    prod_category: '',
    prod_price: 0,
    prod_qty: 1,
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
