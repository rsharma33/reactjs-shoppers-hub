import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import { Footer } from "./components/Common";
import { siteConfig, siteNav } from "./config";
import { initItemList, getCart } from "./components/partials/datastore";
import "./App.css";

import Main from "./components/Main";
import About from "./components/About";
import Productdetails from "./components/Productdetails";
import Category from "./components/Category";
import { Cart } from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  cartItemsCountTotal() {
    const cartCount = getCart();
    return cartCount.length;
  }

  render() {
    const items = [];
    for (const [index, value] of siteNav.entries()) {
      items.push(
        <li className="nav-item" key={index}>
          <Link className="nav-link" to={value.url}>
            {value.name}
          </Link>
        </li>
      );
    }

    initItemList(); // Storing data into localStorage

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-0">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img
                  src={siteConfig.baseUrl + "/images/shopify.png"}
                  className="pt-2 d-block float-left"
                  alt={siteConfig.siteName}
                  height="60"
                />{" "}
                <span className="mt-4 ml-2 d-inline-block">
                  {siteConfig.siteName}
                </span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">{items}</ul>
                <Link to="/Cart">
                  <button type="button" className="btn btn-primary">
                    <span className="shopping-cart">
                      <i className="fa fa-shopping-cart"></i> (
                      {this.cartItemsCountTotal()})
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </nav>

          <div className="container-fluid">
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/Productdetails/:id"
              component={Productdetails}
            />
            <Route exact path="/category/:id" component={Category} />
            <Route path="/Cart" component={Cart} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
