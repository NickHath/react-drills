import React from 'react';

export default function Todo(props) {
  let displayTasks = props.tasks.map((task, index) => <li key={ index }>{ task }</li>);
  return (
    <ol>
      { displayTasks }
    </ol>
  )
}