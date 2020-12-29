import React, { Component } from 'react' 
import './css/alert.css'
const info = "Lanes represent high level categories, such as teams, product lines, or strategic initiaves. Add a color and description to your lane to communicate valuable details ut stakeholders."
export default class FlashAlert extends Component{
    

    render(){
        return(<div id="alertUser" style={this.props.display}>
            <h3>We'll start with a lane</h3>
            <p>{info}</p>
            <p>Drag and drop a lane to get started</p>
            <button onClick={()=>this.props.triggerHide()}>Got It</button>
        </div>)
    }
}