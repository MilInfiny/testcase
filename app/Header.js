import React, { Component } from 'react'
import './Header.scss'
class Header extends Component {
  render() {
    return (

            <div className="row">
               <div className="centertext">
                 <img src="./logo.png"/>
               </div> 
				<div><h1 className="centertext Heading"> Frond -End Developer</h1>
            <div className="subHeading">
              <p className="centertext contain">Our mission is Build market leading,software-driven businesses by </p>
             <p className="centertext contain">Our mission is Build market leading,software-driven businesses by </p> 
            <p className="centertext contain">Our mission is Build market leading </p>                       
          </div>				 
				</div>
			</div>	
    )
  }
}
export default Header