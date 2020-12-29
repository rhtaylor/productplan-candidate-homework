import React from 'react'
import {Component} from 'react' 
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import productPlan from './productplanLogo.png'
import './productplan.css'  
import RoadMapRoute from './RoadMap.jsx' 
import NavigationBar from './NavigationBar.jsx'
import LaneControl from './LaneControl';
const links = ["RoadMap", "Planning Board", "Parking Lot"]
export default class ProductRoadmap extends Component{
    
    render(){
        return (<div classname="productroadmap"> 
            <Router >  
            <Route path="/" render={(routerProps) => <NavigationBar {...routerProps} />} />
            <Route path="/RoadMap" render={(routerProps) => <RoadMapRoute {...routerProps} />} />
            </Router>
            </div>
        )
    }
}