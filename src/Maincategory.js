import React from 'react'

export default function Maincategory(props) {
  return (
    <React.Fragment>
      <div className="main-category">{props.currentTask}</div>
    </React.Fragment>
  )
}
