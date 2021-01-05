import React from 'react'

export default function Item(props) {

  // checkedStyle = {

  // }

  return (
    <div className="item" >
      <button className="checked"
        onClick={() => props.onClickChecked(props.item.task, props.currentTask)}
        
        style={props.item.isDone ? { backgroundColor: "green", color: "yellow" } : { backgroundColor: "white", color: "black" }}
        
        style={props.currentTask === 'Favorite' ? { visibility: "hidden" } : { visibility: "visible" }}

      ><i className="fa fa-check"></i></button>
      
        <div className="task" style={props.item.isDone ? {opacity: 0.3, fontStyle: 'italic', textDecoration: 'line-through'} : {opacity:1, fontStyle: 'normal'}}>{props.item.task}</div>
      <button className="importance" onClick={() => props.onClickFavorite(props.item.task, props.currentTask)}
      style={props.item.isFavorite ? {backgroundColor: "red", color: "yellow"} : {backgroundColor:"white", color:"black"}}
      ><i className="fa fa-star"></i></button>
        <button className="delete" style={props.currentTask === 'Favorite' ? { visibility: "hidden" } : { visibility: "visible" }} onClick={() => props.onClickDelete(props.item.task, props.currentTask)}><i className="fa fa-times"></i></button>
      </div>
  )
}
