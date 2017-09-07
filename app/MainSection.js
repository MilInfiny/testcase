import React, { Component } from 'react'
import './MainSection.scss'
var redheight;
var data=[{
  id:"1",
  tittle:"Title Lorem ipsum dolor sit",
  details:'Loren ipsum dolor sit amet,quis dictum mauis erat',
  details1:'aliquam,ac in pede phareta quis non et',
 select:"ketchup",
 value:0
},{
  id:"2",
  tittle:"Title Lorem ipsum dolor sit",
 details:'Loren ipsum dolor sit amet,quis dictum mauis erat',
  details1:'aliquam,ac in pede phareta quis non et', 
 select:"ketchup",
 value:0
},{
   id:"3",
  tittle:"Title Lorem ipsum dolor sit",
 details:'Loren ipsum dolor sit amet,quis dictum mauis erat',
  details1:'aliquam,ac in pede phareta quis non et',
 select:"ketchup",
 value:0
}]
class MainSection extends Component {
    constructor (props) {
    super(props);
    this.state = {
      height:0,
      data:[],
      firsttime:0,
      total:0,
      count:0
    }
    this.calculateadd=this.calculateadd.bind(this);
    this.calculateminus=this.calculateminus.bind(this);
  }

calculateadd(value)
{
  var datastates=this.state.data;
  for(var i=0;i<datastates.length;i++)
  {
     if(datastates[i]==value)
     {
     var count =this.state.count;

      datastates[i].value=datastates[i].value+1;
      this.setState({data:datastates,count:count+1,total:(count+1)*75})
     }
  }
}
calculateminus(value)
{
  var datastates=this.state.data;
  for(var i=0;i<datastates.length;i++)
  {
     if(datastates[i]==value)
     {
       var count =this.state.count;
      datastates[i].value=datastates[i].value-1;
      this.setState({data:datastates,count:count-1,total:(count-1)*75})
     }
  }
}

 componentDidMount() {
    const height = this.divElement;
    console.log(height.clientHeight)
     this.setState({height:height,firsttime:1})
       }
 
  render() {
    if(this.state.firsttime==0)
    {
      console.log("DFwadfsadfsda")
    var datastates=this.state.data
    datastates=data;  
    this.setState({data:datastates})  
  }
  


    return (
      <div>      
      <div className="view-container">
         <div className="view-container">
       <div className="row bg-red" ref={ (reddivElement) => this.reddivElement = reddivElement} style={{minHeight:this.state.height}}>
         <div ref={ (divElement) => this.divElement = divElement} className="col-xs-11 col-sm-11 col-md-11 col-lg-11 card-view">
            {(this.state.data.map((datastate,i)=>(
            <div className="card">
              <div className="card-block">
                 <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <div className="row">
                          <img className="col-xs-12 col-sm-12 col-md-12 col-lg-12 img-responsive" style={{padding:30}} src="./home.jpg"/></div>
                     </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <h1 className="tittle">{datastate.tittle}</h1>
                      <p className="description" style={{marginBottom:0,marginTop:30}}>{datastate.details}</p>   
                      <p className="description">{datastate.details1}</p>
                      <div className="row" style={{marginTop:30}}>
                        <select className="btn dropdown-toggle btn-default col-xs-4 col-sm- col-md-4 col-lg-4 selectdiv" >
                          <option>Select</option>
                          <option>Ketchup</option>
                          <option>Relish</option>
                         </select>
                      </div> 
                    </div>
                    <div  className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                      <div className="row">
                        <span className="col-xs-5 col-sm-5 col-md-5 col-lg-5 deletestyle glyphicon glyphicon-trash" onClick={(e)=>{e.preventDefault();var datastates=this.state.data;var count=this.state.count;var index = datastates.indexOf(datastate); if (index > -1) {  datastates.splice(index, 1); this.setState({data:datastates,count:count-datastate.value,total:(count-datastate.value)*75})}}}></span>  
                         </div> 
                       <div className="row pricelist">
                         <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 quantity" >
                         {(datastate.value==1)?<button type="button" className="btn btn-default btn-number" disabled="disabled"><span className="glyphicon glyphicon-minus"></span></button>                
                          :<button type="button" className="btn btn-default btn-number" onClick={(e)=>{e.preventDefault(); this.calculateminus(datastate)}}><span className="glyphicon glyphicon-minus"></span></button>}                  
                           <p style={{margin:15}}>{datastate.value}</p>
                          <button type="button" className="btn btn-default btn-number" onClick={(e)=>{e.preventDefault(); this.calculateadd(datastate)}} ><span className="glyphicon glyphicon-plus"></span></button>
                         </div>
                         <p className="amount">75.00 $</p> 
                       </div>
                    </div>                                    
                 </div>
                 <div className="row bg-gray">
                 </div>

              </div>
            </div>

            )))}
            <div className="row totalamount">
                  {this.state.total}
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




