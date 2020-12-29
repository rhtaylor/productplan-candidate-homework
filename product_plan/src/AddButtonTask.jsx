import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './css/addLane.css'  
import './css/alert.css'
import FlashAlert from './FlashAlert.jsx' 
import DropComponent from './DropComponent.jsx'
export default class AddButtonTask extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    componentDidMount() {
            document.addEventListener('click', this.handleClickOutside, true);
        }
    
    render(){
        return (<div className="addLane" onClick={(e)=>this.props.addLane(e)}> 
            
                <i className="fas fa-arrows-alt-v"></i>
                 <br/> 
                      Add Lane 
                <br/>
                <i className="arrow down"></i> 
                 </div>)
    }
}