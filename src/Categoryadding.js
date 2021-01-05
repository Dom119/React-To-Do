import React from 'react'

export default function Categoryadding(props) {
  return (
    <React.Fragment>
      <div className="category-adding">
        <input type="text"
          placeholder='New category...'
          class='category-new'
          value={props.newCategory}
          onChange={props.onChange}/>
          <button className='category-plus' onClick={props.onClick}><i className="fas fa-plus"></i></button>
        </div>
    </React.Fragment>
  )
}
