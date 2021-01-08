import React, {Component} from 'react';
import { siteConfig } from '../config';
import { Carousel, SidebarCategoryLinks } from './Common';
import { Link} from 'react-router-dom'
import Lightbox from "react-image-lightbox";
import { CartWidget } from './Cart';
import "react-image-lightbox/style.css";

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    const categArray = siteConfig.categElement;

    return (
        <div className="row">
          <div className="col-12 p-0"><Carousel /></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <aside className="sidebar-left col-lg-3">
                    <SidebarCategoryLinks pageParam={this.props.match.params} categel={categArray} />
                    {/* end: Category Section */}

                    <CartWidget />
                    {/* end: section.cart-summary */}

                  </aside>
                  {/* end: aside.sidebar-left */}

                  <section className="productile col-lg-9">
                    <Productile pid={this.props.match.params} />
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

/* ================================
  starts: Productile
 ================================ */
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
        if(this.props.pid.id.toLowerCase() === prod.prod_category.toLowerCase()){
          return(
            <div className="col-lg-4 col-md-6 mb-4" key={i}>
                 <div className="card h-100">
                   <img className="card-img-top featurette-image img-fluid mx-auto" src={prod.prod_image.small} alt={prod.prod_name} onClick={() => this.setState({ isOpen: true })} />
                   <div className="card-body">
                     <h6 className="card-title">{prod.prod_name}</h6>
                     <h5>${prod.prod_price}</h5>
                     {/* <p className="card-text">{prod.prod_shortdesc}</p> */}
                     <small className="text-muted">Rating: <span className="badge badge-success">{prod.prod_rating} &#9733;</span> | Reviews: ({prod.prod_reviews})</small>
                   </div>
                   <div className="card-footer">
                     <Link to={`/Productdetails/${prod.prod_id}`} className="btn btn-primary btn-sm float-left" onClick={() => this.passpid(prod)}><i className="fas fa-info-circle"></i> Details</Link>
                     <button className="btn btn-primary btn-sm float-right" ><i className="fas fa-cart-plus"></i> Add to cart</button>
                   </div>
                 </div>
            </div>
          )
        }
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
                    }
                  />
                )}
      </div>
    );
  }
}
/* ================================
  ends: Productile
 ================================ */

export default Main;
