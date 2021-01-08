import React, { Component } from 'react';
import { siteConfig } from '../config';
import { Link } from 'react-router-dom';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = siteConfig.tempLargeImages;

class Productile extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [],
      photoIndex: 0,
      isOpen: false,
    };

    this.passpid = this.passpid.bind(this);
  }

  passpid(param) {
    console.log(param);
  }

  componentDidMount(){
    fetch(siteConfig.prodData)
    .then(results => {
      return results.json();
    }).then(data => {
      let products = data.map((prod, i) => {
        return(
          <div className="col-lg-4 col-md-6 mb-4" key={i}>
               <div className="card h-100 product-card">
                 <img className="card-img-top featurette-image img-fluid mx-auto" src={prod.prod_image.small} alt={prod.prod_name}  onClick={() => this.setState({ isOpen: true })} />
                 <div className="card-body">
                   <h6 className="card-title">{prod.prod_name}</h6>
                   <h5>${prod.prod_price}</h5>
                   {/* <p className="card-text">{prod.prod_shortdesc}</p> */}
                   <small className="text-muted">Rating: <span className="badge badge-success">{prod.prod_rating} &#9733;</span> | Reviews: ({prod.prod_reviews})</small>
                 </div>
                 <div className="card-footer">
                   <Link to={`/Productdetails/${prod.prod_id}`} className="btn btn-primary btn-sm float-left" onClick={() => this.passpid(prod)}><i className="fas fa-info-circle"></i> Details</Link>
                    <button disabled={prod.prod_incart === true} className="btn btn-primary btn-sm float-right"><i className="fas fa-cart-plus"></i> Add to cart</button>
                 </div>
               </div>
          </div>
        )
      })
      this.setState({products: products});
    })
  }

  render(){
    const { photoIndex } = this.state;

    return(
      <div className="row">
          {this.state.products}
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
      </div>
    );
  }
}

export default Productile;
