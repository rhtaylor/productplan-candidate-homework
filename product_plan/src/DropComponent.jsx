import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DropComponent extends Component{
    dragOver=(e)=>{
        e.preventDefault(); 
        e.dataTransfer.setData("transfer", e.target.id)

    }  
    dragStart=(e)=>{
        e.preventDefault(); 
        e.persist() 
        e.dataTransfer.setData("transfer", e.target.id) 
        setTimeout(()=>{ 
            e.target.style.display = "none"
        }, 0);

    }
    noAllowDrop=(e)=>{
        e.stopPropagation()
    }
    render(){
        return(<div className="bar" id={this.props.id} draggable="true" 
        onDrag={e=>this.dragStart(e)} onDragOver={e=>this.dragOver(e)} 
        style={this.props.style}
        >{this.props.children}
        </div>)
    }
} 
 

DropComponent.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}