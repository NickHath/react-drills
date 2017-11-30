import React from 'react';

export default function Todo(props) {
  const allTasks = props.tasks.map((task, index) => <li key={ index }>{ task }</li>)
  return (
    <div className='todo'>
      <ul>
        { allTasks }
      </ul>
    </div>
  )
}