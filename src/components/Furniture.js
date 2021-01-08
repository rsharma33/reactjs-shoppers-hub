import React, { Component } from 'react';

 

const list = {

             

  mobile1: {

    id:10,

    name:"Honor V10",

    price:400

  },

    mobile2: {

    id:20,

    name:"Vivo B10",

    price:500

  }

}

 

let item12, item22;

 

class Prod extends React.Component{

             

                constructor() {

      super();

     

      this.state = {

 

                             data1: 'Add To Cart',

                             data2: 'Add To Cart'

 

      }

      this.updateState = this.updateState.bind(this);

      this.updateStatew = this.updateStatew.bind(this);

   };

  

   updateState() {

      this.setState({data1: 'Added To Cart'})

                                          

               

                item12 = 13;

                if(!item12 == false){

                console.log("cor");

                }else{

                               console.log('data1 false');

                }

               

                store = localStorage.setItem('myDatab', item12);

               

                 let valh= localStorage.getItem('myDatab');

                                           console.log(valh + "its local scope");

                                           window.location.reload();

                                           alert("Succesfully added");

               

   }

  

   

 

  

   updateStatew() {

      this.setState({data2: 'Added To Cart'})

                item22 = 23;

               

                store2 = localStorage.setItem('myDatac', item22);

               

                 let valg= localStorage.getItem('myDatac');         

                

                // if(valg){

                // console.log('Added to cart');

                // }else{

                               // console.log('data2 False');

                // }

                window.location.reload();

              alert("Succesfully added");

   }  

   

 

             

              render(){

                             return(

                                           <div>

                                          

                                                          <div className="row" align='center'>

                                                         

                                                            <div className="col-md-3">

                                                                          <img src="data:image/jpeg;base64,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" className="img-responsive" width="50%" height="150px" alt="Product"/>

                                                                          <h4>{list.mobile1.name}</h4>

                                                                          <h5>${list.mobile1.price}</h5>

                                                                          <button disabled={valh === "13"} className="btn btn-primary btn-lg" onClick = {this.updateState}>{this.state.data1}</button>

 

                                                          </div>

                                                           

                                                            <div className="col-md-3" align='center'>

                                                           

                                                                          <img src="data:image/jpeg;base64,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" className="img-responsive" width="50%" height="150px" alt="Product"/>

                                                                          <h4>{list.mobile2.name}</h4>

                                                                          <h5>${list.mobile2.price}</h5>

                                                                          <button disabled={valg === "23"} className="btn btn-primary btn-lg" onClick = {this.updateStatew}>{this.state.data2}</button>

 

                                                          </div>                                            

 

                                                            <div className="col-md-3"></div>

                                                            <div className="col-md-3"></div>

                                                          </div>

 

                                           </div>

                             );

              }

}

 

               

 let store;

let store2;

let valh= localStorage.getItem('myDatab');

let valg= localStorage.getItem('myDatac');

              //localStorage.removeItem('myData');

              // console.log(valh + "its data1");

              // console.log(valg + "its data2");

 

let bgColors = {"Yellow": "#F6BB42", "Lightdarker": "#0088cc"};

 

 

class Furniture extends Component{

             

              constructor() {

    super();

   

    this.state = {

      showMenu: false,

    }

   

    this.showMenu = this.showMenu.bind(this);

  }

 

  showMenu(event) {

    event.preventDefault();

   

    this.setState({

      showMenu: true,

    });

  }

 

             

   render(){

      return(

         <div>

                            

                              

                             <div align="right" style={{backgroundColor: bgColors.Lightdarker}}>

                                           <button style={{backgroundColor: bgColors.Yellow}} className="btn btn-primary btn-lg" onClick={this.showMenu}>

                                             Checkout

                                           </button>

        </div>

                            

        {

                                                           

          this.state.showMenu

            ? (

                                                                        <div>

 

                                                                          {

                                                                                        (valh || valg) ? (

                                                                                       

                                                                                                                                  <div>

                                                                                                                                  {

                                                                                                                                                (valh && !valg) ? (

                                                                                                                                               

                                                                                                                                                <div className="row" align='center'>

                                                                                                                                                               <div className="col-md-3">

                                                                                                                                                                 <img src="images/honor.jpg" className="img-responsive" width="50%" height="150px" alt="Product"/>

                                                                                                                                                                 <h4>{list.mobile1.name}</h4>

                                                                                                                                                                 <h5>${list.mobile1.price}</h5>

                                                                                                                                                               </div>                                                                                                                                                  

                                                                                                                                                 </div>

                                                                                                                                               

                                                                                                                                                ) : (null)

                                                                                                                                  }

                                                                                                                                 

                                                                                                                                  {

                                                                                                                                                (!valh && valg) ? (

                                                                                                                                               

                                                                                                                                                <div className="row" align='center'>

                                                                                                                                                               <div className="col-md-3">

                                                                                                                                                                 <img src="images/vivo.jpg" className="img-responsive" width="50%" height="150px" alt="Product"/>

                                                                                                                                                                 <h4>{list.mobile2.name}</h4>

                                                                                                                                                                 <h5>${list.mobile2.price}</h5>

                                                                                                                                                               </div>                                                                                                                                                  

                                                                                                                                                 </div>                                                                                                                                                                                                                                                                    

                                                                                                                                               

                                                                                                                                                ) : (null)

                                                                                                                                  }

                                                                                                                                 

                                                                                                                                  {

                                                                                                                                                (valh && valg) ? (

                                                                                                                                               

                                                                                                                                                <div className="row" align='center'>

                                                                                                                                                               <div className="col-md-3">

                                                                                                                                                                 <img src="images/honor.jpg" className="img-responsive" width="50%" height="150px" alt="Product"/>

                                                                                                                                                                 <h4>{list.mobile1.name}</h4>

                                                                                                                                                                 <h5>${list.mobile1.price}</h5>

                                                                                                                                                               </div>

                                                                                                                                                               <div className="col-md-3">

                                                                                                                                                                <img src="images/vivo.jpg" className="img-responsive" width="50%" height="150px" alt="Product"/>

                                                                                                                                                                 <h4>{list.mobile2.name}</h4>

                                                                                                                                                                 <h5>${list.mobile2.price}</h5>

                                                                                                                                                               </div>                                                                                                                                                                

                                                                                                                                                </div>                                                                                                                                                                

                                                                                                                                              

                                                                                                                                                ) : (null)

                                                                                                                                  }                                          

                                                                                                                                  <div align="right">

                                                                                                                                 <button  disabled className="btn btn-info btn-lg" align="right" onClick={this.clearMenu}>

                                                                                                                                    Clear Cart

                                                                                                                                 </button><br /><br />

                                                                                                                                 <button  disabled className="btn btn-danger btn-lg" align="right" onClick={this.clearMenu}>

                                                                                                                                    Total Price: $  

                                                                                                                                 </button>

                                                                                                                                  </div>

                                                                                                                                  </div>

                                                                                                                                               

                                                                                                                  

 

                                                                                        ) : (<h4> Shopping Cart Is Empty</h4>)

                                                                          }

 

                                                                        </div>

              )

               : (

                                          

            <div>

                                                          <Prod />

                                           </div>

                                          

            )

        }

      </div>                         

                               

      );

   }

}

export default Furniture;

 