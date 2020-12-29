import React from 'react' 
import PropTypes from 'prop-types'
import {Component} from 'react'
import './productplan.css' 
import FlashAlert from './FlashAlert' 

import DropComponent from './DropComponent.jsx'
export default class RoadMapRoute extends Component{ 
    constructor(props) {
        super(props); 
        this.state={
            display: "show",
            drop: 'flex', 
            background: 'red',
            height: "10em"
        } 
        
       
    } 
    

    showStyle = ()=> this.setState({ 
        display: 'none',
        background: "red", 
        height: "10em",
        drop: "show"
    })
    
    drop=(e)=>{
        e.preventDefault(); 
        const componentDrop = e.dataTransfer.getData("transfer")  
        componentDrop.style.display = "block"
        e.target.appendChild(document.getElementById(componentDrop))
    } 
    dragOver=(e)=>{
        e.preventDefault(); 

    }
    allowDrop=(e)=>{
        e.preventDefault()
    }
    triggerHide = ()=> this.setState({
        display: 'none'
    })
    render(){
        return(<div className="swimlanes" 
        className={this.props.className}
        id={this.props.id} onDrop={(e)=>this.drop(e)} 
        onDragOver={e=>this.dragOver(e)} style={this.props.style}
        >{this.props.children}<DropComponent style={{
            background: "red",
            height: "10em", 
            width: "10em",
            drop: "show"}} /><FlashAlert display={{display: this.state.display}} triggerHide={this.triggerHide} /></div>)
    }
} 

RoadMapRoute.propTypes={
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}