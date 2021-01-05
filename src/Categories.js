import React from 'react'
import Category from './Category.js'


export default function Categories(props) {
  return (
    <React.Fragment>
      <ul className="categories">
        {props.data.map(item => {
          return (
            <Category currentTask={props.currentTask} key={item.category} category={item.category}
              taskCounting={item.taskCounting}
              onClick={() => props.onClick(item.category)}
            
            />
          )
          })}
      </ul>
    </React.Fragment>
  )
}
