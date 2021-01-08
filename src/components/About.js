import React, {Component} from 'react';
import { Carousel, SidebarCategoryLinks } from './Common';
import { siteConfig } from '../config';

class About extends Component{
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

                  </aside>
                  {/* end: aside.sidebar-left */}

                  <section className="static-content col-lg-9">
                    <h1>About us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique lectus enim, rhoncus ultricies velit sollicitudin in. Maecenas sit amet rutrum lorem, vel semper magna. Nam cursus diam ut quam sollicitudin interdum. Donec mollis a eros quis vulputate. Curabitur lectus ipsum, blandit ut bibendum vitae, rutrum non erat. Donec elementum mi ac ligula feugiat, id faucibus lorem hendrerit. Sed eget sapien ornare neque euismod interdum nec ut libero. Curabitur at semper turpis, id porta sem. Aenean tincidunt mauris in dolor pellentesque volutpat. Morbi non tempor neque.</p>

                    <p>Aenean pretium, ex ut vulputate porta, metus turpis tristique tortor, ut sollicitudin ex ligula ut felis. Curabitur orci diam, ultrices ac arcu vel, commodo suscipit nulla. Vivamus vel ante lobortis, scelerisque tortor a, hendrerit nunc. Pellentesque vel dui non libero rhoncus sagittis in a est. Cras ex odio, luctus vel massa ut, aliquet aliquam turpis. Nam et blandit lectus. Praesent nec augue gravida, egestas quam porttitor, hendrerit elit.</p>

                    <p>Nulla ac venenatis risus, a venenatis ligula. Nam fermentum ante elit, id rutrum nisi commodo nec. Aenean malesuada dui vel erat porttitor accumsan. Etiam quis tortor molestie, aliquet est sit amet, eleifend lorem. Etiam sagittis, dolor a tempor aliquam, nulla lacus porttitor nulla, eget rhoncus urna nibh sit amet est. Proin magna nisi, dignissim scelerisque rhoncus ac, finibus nec elit. Cras ornare convallis elit, in porta felis tincidunt vel. Pellentesque porttitor finibus viverra. Nam at maximus tortor. Duis fringilla diam non libero viverra, at suscipit turpis sagittis. Pellentesque molestie sapien pretium rutrum lacinia.</p>
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

export default About;
