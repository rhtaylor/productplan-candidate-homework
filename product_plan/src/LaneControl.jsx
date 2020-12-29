import react from "react";
import React from 'react'
import {Component} from 'react'
import './lanecontrol.css' 
import AddButtonTask from './AddButtonTask'
import DropComponent from "./DropComponent";
export default class LaneControl extends Component{
    constructor(props){
        super(props)
    }  
    addLane(e){ 
        e.preventDefault();
        debugger
    }

    render(){
        return(<div className="lanecontrol">
            <AddButtonTask addGlobal={this.addGlobal} addLane={this.addLane}/> 

        </div>)
    }
}