import React, {Component} from 'react';



class Child extends Component{
    render(){
        return(
<div className="container">
<div id="myCarousel" className="carousel slide" data-ride="carousel">



  <ol className="carousel-indicators">

   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>

    <li data-target="#myCarousel" data-slide-to="1"></li>

    <li data-target="#myCarousel" data-slide-to="2"></li>

  </ol>





  <div className="carousel-inner">

    <div className="item active">

      <img src="http://www.bigstarcopywriting.com/wp-content/uploads/2014/12/women-shopping.jpg" alt="Los Angeles" width="50%" height="150px"/>

    </div>



    <div className="item">

      <img src="https://ak1.ostkcdn.com/img/mxc/02142019_Furniture_AMOD_DESKTOP.jpg?imwidth=640&impolicy=medium" alt="Chicago" width="50%" height="150px"/>

    </div>

 

    <div className="item">

      <img src="https://www.irishtimes.com/polopoly_fs/1.3053971.1492610795!/image/image.jpg_gen/derivatives/box_620_330/image.jpg" alt="New york" width="50%" height="150px"/>

    </div>

  </div>





  <a className="left carousel-control" href="#myCarousel" data-slide="prev">

    <span className="glyphicon glyphicon-chevron-left"></span>

    <span className="sr-only">Previous</span>

  </a>

  <a className="right carousel-control" href="#myCarousel" data-slide="next">

    <span className="glyphicon glyphicon-chevron-right"></span>

    <span className="sr-only">Next</span>

  </a>

</div>

</div>



        )
    }
}

export default Child;