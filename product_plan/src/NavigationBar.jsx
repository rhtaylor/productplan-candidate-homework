import React from 'react'
import {Component} from 'react' 
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; 
 import './productplan.css'  
import './css/linkComponent.css'
import LaneControl from './LaneControl'
export default class NavigationBar extends Component{
    componentDidMount(){
       this.props.history.push("/RoadMap")
    }
    render(){ 
       
        return(  
            
            <div className="navbar"> 
            <h1>Product Roadmap</h1>
            <span id="links">
            <NavLink to="/RoadMap" exact className="navA">RoadMap</NavLink>
            </span>
            </div>
        )
    }
}