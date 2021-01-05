import React from 'react'

export default function Taskinput(props) {
  return (
    <React.Fragment>
      <div className="input-task">
        <input type="text"
          id='input'
          class='input'
          placeholder='What is your new task...'
          value={props.newTask}
          onChange={props.onChange}/>
        <button className='adding' onClick={props.onClick}>Add</button>
          </div>
    </React.Fragment>
  )
}
