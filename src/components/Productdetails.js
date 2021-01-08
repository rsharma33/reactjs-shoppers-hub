import React, {Component} from 'react';
import { Carousel, SidebarCategoryLinks } from './Common';
import { siteConfig } from '../config';

class Productdetails extends Component{
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
              <div className="col-12 pb-3">
                <div className="row">
                  <aside className="sidebar-left col-lg-3">
                    <SidebarCategoryLinks pageParam={this.props.match.params} categel={categArray} />
                    {/* end: Category Section */}
                  </aside>
                  {/* end: aside.sidebar-left */}

                  <section className="productile col-lg-9">
                    <ProdDetailsCard pid={this.props.match.params} />
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
  starts: ProdDetailsCard
 ================================ */
class ProdDetailsCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [],
    };
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

  componentDidMount(){
    fetch(siteConfig.prodData)
    .then(results => {
      return results.json();
    }).then(data => {
      let products = data.map((prod, i) => {
        if(this.props.pid.id === prod.prod_id){
          return(
            <div key={i} className="card border-0">
              <div className="container-fliud">
        				<div className="wrapper row">
        					<div className="preview col-md-6">
        						<div className="preview-pic tab-content">
        						  <div className="tab-pane active" id="pic-1"><img src={prod.prod_image.medium} width="100%" alt="Not found" /></div>
        						</div>
        					</div>
        					<div className="details col-md-6">
        						<h3 className="product-title">{prod.prod_name}</h3>
        						<div className="rating">
        							<div className="stars">
                          {this.starRating(prod.prod_rating)} <strong>({prod.prod_rating})</strong>
        							</div>
        							<span className="review-no"><strong>{prod.prod_reviews}</strong> Reviews</span>
        						</div>
                    <p className="product-category"><strong>Category:</strong> {prod.prod_category}</p>
        						<p className="product-description"><strong>Short Description:</strong> {prod.prod_shortdesc}</p>
                    <p className="product-description"><strong>Long Description:</strong> {prod.prod_longdesc}</p>

        						<div className="row">
                      <div className="col-md-12">
                        <h4 className="price">Price: <span>${prod.prod_price}</span></h4>
                      </div>
        						</div>
        					</div>
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
    return(
      <div className="row">
          {this.state.products}
      </div>
    );
  }
}
/* ================================
  ends: Product Details Component
 ================================ */

export default Productdetails;
