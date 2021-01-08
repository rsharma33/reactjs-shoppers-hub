import React, {Component} from 'react';
import { siteConfig } from '../config';
import { Carousel, SidebarCategoryLinks } from './Common';
// import Productile from './Productile';
import { CartWidget } from './Cart';
import Item from '../components/partials/items';
import { getItemList } from '../components/partials/datastore';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  getItemComponents() {
    return getItemList().map((item, i) => (<Item key={item.prod_id} item={item} />));
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

                    <CartWidget />
                  </aside>
                  {/* end: aside.sidebar-left */}

                  <section className="productile col-lg-9">
                    <div className="row">{this.getItemComponents()}</div>
                    {/* <Productile /> */}
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

export default Main;
