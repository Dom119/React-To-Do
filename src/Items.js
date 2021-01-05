import React from 'react'
import Item from './Item.js'



export default function Items(props) {

  return (
    <React.Fragment>
      <div className="items">
        {props.listing.map(item => {
          return (
            <Item key={item.task} item={item} currentTask={props.currentTask}
              onClickChecked={props.onClickChecked}
              onClickDelete={props.onClickDelete}
              onClickFavorite={props.onClickFavorite}
            
            />
          )
        })}
      </div>
    </React.Fragment>
  )
}
