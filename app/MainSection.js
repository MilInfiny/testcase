import React, { Component } from 'react'
import './MainSection.scss'
var redheight;
class MainSection extends Component {
    constructor (props) {
    super(props);
    this.state = {
      height:0
    }
  }

 componentDidMount() {
    const height = this.divElement.clientHeight;
    const width = this.reddivElement.clientWidth;
    var extraheight=width*5/100
     redheight=height+extraheight
     this.setState({height:height})
       }
  render() {
    return (
      <div className="view-container">
       <div className="row bg-red" ref={ (reddivElement) => this.reddivElement = reddivElement} style={{minHeight:this.state.height}}>
         <div ref={ (divElement) => this.divElement = divElement} className="col-xs-11 col-sm-11 col-md-11 col-lg-11 card-view">
      			<div className="card">
      				<div className="card-block">
      				   <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <div className="row">
                          <img className="col-xs-12 col-sm-12 col-md-12 col-lg-12 img-responsive" style={{padding:30}} src="./home.jpg"/></div>
                     </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <h1 className="tittle">Title Lorem ipsum dolor sit</h1>
                      <p className="description" style={{marginBottom:0,marginTop:30}}>Loren ipsum dolor sit amet,quis dictum mauis erat </p>   
                      <p className="description">aliquam,ac in pede phareta quis non et</p>
                      <div className="row" style={{marginTop:30}}>
                        <select className="btn dropdown-toggle btn-default col-xs-4 col-sm- col-md-4 col-lg-4 selectdiv">
                          <option>Mustard</option>
                          <option>Ketchup</option>
                          <option>Relish</option>
                         </select>
                      </div> 
                    </div>
                    <div  className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                      <div className="row">
                        <span className="col-xs-5 col-sm-5 col-md-5 col-lg-5 deletestyle glyphicon glyphicon-trash"></span>
                       </div> 
                       <div className="row pricelist">
                         <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 quantity" >
                          <button type="button" className="btn btn-default btn-number"><span className="glyphicon glyphicon-minus"></span></button>                  
                           <p style={{margin:15}}>5</p>
                          <button type="button" className="btn btn-default btn-number"><span className="glyphicon glyphicon-plus"></span></button>
                         </div>

                         <p className="amount">75.00 $</p> 
                       </div>

                    </div>                                    
                 </div>
                 <div className="row bg-gray">

                 </div>

      				</div>
      			</div>
            <div className="card">
              <div className="card-block">
                 <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <div className="row">
                          <img className="col-xs-12 col-sm-12 col-md-12 col-lg-12 img-responsive" style={{padding:30}} src="./home.jpg"/></div>
                     </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <h1 className="tittle">Title Lorem ipsum dolor sit</h1>
                      <p className="description" style={{marginBottom:0,marginTop:30}}>Loren ipsum dolor sit amet,quis dictum mauis erat </p>   
                      <p className="description">aliquam,ac in pede phareta quis non et</p>
                      <div className="row" style={{marginTop:30}}>
                        <select className="btn dropdown-toggle btn-default col-xs-4 col-sm- col-md-4 col-lg-4 selectdiv">
                          <option>Mustard</option>
                          <option>Ketchup</option>
                          <option>Relish</option>
                         </select>
                      </div> 
                    </div>
                    <div  className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                      <div className="row">
                        <span className="col-xs-5 col-sm-5 col-md-5 col-lg-5 deletestyle glyphicon glyphicon-trash"></span>
                       </div> 
                       <div className="row pricelist">
                         <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 quantity" >
                          <button type="button" className="btn btn-default btn-number"><span className="glyphicon glyphicon-minus"></span></button>                  
                           <p style={{margin:15}}>5</p>
                          <button type="button" className="btn btn-default btn-number"><span className="glyphicon glyphicon-plus"></span></button>
                         </div>
                         <p className="amount">75.00 $</p> 
                       </div>
                    </div>                                    
                 </div>
                 <div className="row bg-gray">
                 </div>
              </div>
            </div>
            <div className="card">
              <div className="card-block">
                 <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <div className="row">
                          <img className="col-xs-12 col-sm-12 col-md-12 col-lg-12 img-responsive" style={{padding:30}} src="./home.jpg"/></div>
                     </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <h1 className="tittle">Title Lorem ipsum dolor sit</h1>
                      <p className="description" style={{marginBottom:0,marginTop:30}}>Loren ipsum dolor sit amet,quis dictum mauis erat </p>   
                      <p className="description">aliquam,ac in pede phareta quis non et</p>
                      <div className="row" style={{marginTop:30}}>
                        <select className="btn dropdown-toggle btn-default col-xs-4 col-sm- col-md-4 col-lg-4 selectdiv">
                          <option>Mustard</option>
                          <option>Ketchup</option>
                          <option>Relish</option>
                         </select>
                      </div> 
                    </div>
                    <div  className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                      <div className="row">
                        <span className="col-xs-5 col-sm-5 col-md-5 col-lg-5 deletestyle glyphicon glyphicon-trash"></span>
                       </div> 
                       <div className="row pricelist">
                         <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 quantity" >
                          <button type="button" className="btn btn-default btn-number"><span className="glyphicon glyphicon-minus"></span></button>                  
                           <p style={{margin:15}}>5</p>
                          <button type="button" className="btn btn-default btn-number"><span className="glyphicon glyphicon-plus"></span></button>
                         </div>
                         <p className="amount">75.00 $</p> 
                       </div>
                    </div>                                    
                 </div>
                 <div className="row bg-gray">
                 </div>
                 <div className="row totalamount">
                  225.00 $
                 </div>
              </div>
            </div>
         </div>
       </div>
      </div> 
          
    )
  }
}
export default MainSection




