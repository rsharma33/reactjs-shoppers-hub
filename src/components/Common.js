import React, {Component} from 'react';
import { siteConfig } from '../config';

class Carousel extends Component{
  render(){
    return (
      <div id="carouselExampleIndicators" className="carousel slide my-0" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner shadow mb-5 bg-white" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src={siteConfig.baseUrl+"/images/banner1.jpg"} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={siteConfig.baseUrl+"/images/banner2.jpg"} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={siteConfig.baseUrl+"/images/banner3.jpg"} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={siteConfig.baseUrl+"/images/banner4.jpg"} alt="Fourth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={siteConfig.baseUrl+"/images/banner5.jpg"} alt="Fifth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    );
  }
}

class Footer extends Component{
  render(){
    return (
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; {siteConfig.siteName} 2019</p>
        </div>
      </footer>
    );
  }
}

class SidebarCategoryLinks extends Component{
  render(){
    return (
      <section className="col-md-12 mb-5">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Categories</span>
        </h4>
        <ul className="list-group mb-3">
          { this.props.categel.map((value, index) => {
            if(this.props.pageParam.id !== undefined && (this.props.pageParam.id.toLowerCase() === value.name.toLowerCase())){
              return <li className="list-group-item active" key={index}><a href={value.url}>{value.name}</a></li>
            }else{
              return <li className="list-group-item" key={index}><a href={value.url}>{value.name}</a></li>
            }
          })}
        </ul>
      </section>
    );
  }
}

export { Carousel, Footer, SidebarCategoryLinks }
