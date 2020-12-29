import React from 'react';
import {Component} from 'react';

import './App.css';
import './productplan.css'
import './roadmap.css' 
import ProductRoadmap from './ProductRoadmap'
import LaneControl from './LaneControl'
import productPlan from './productplanLogo.png'
import DropComponent from './DropComponent.jsx'
class RoadMap extends Component{ 
  addALane =(e)=>{
    debugger 
    return (<DropComponent />)
  }
  render(){
  return(<div className="productplan">
    <p><img src={productPlan} /> <b>Candidate Roadmap</b></p> 
    <ProductRoadmap addALane={this.addALane}/>
    <div className="roadmap"> 
    <LaneControl addALane={this.addALane}/>
    </div> 
    </div>
  )
}
} 

export default RoadMap