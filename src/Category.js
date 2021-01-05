import React from 'react'

export default function Category(props) {
  return (
    <React.Fragment>
      <li className="category" key={props.category} onClick={props.onClick}
      style={ props.category===props.currentTask ? {backgroundColor: "orange", color:"blue"} : {}}
      >
        <div className="category-icon"><i className="fas fa-star"></i></div>
        <div className="category-name">{props.category}</div>
        <div className="category-number">{props.taskCounting}</div>
      </li>
    </React.Fragment>
  )
}
