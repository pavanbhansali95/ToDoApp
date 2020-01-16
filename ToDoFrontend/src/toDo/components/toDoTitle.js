import React from 'react';
const ToDoTitle = (props) => {
return(
    <div style = {{fontWeight: 'bold',cursor: 'pointer'}} onClick = {props.onClick}>
        { props.title }
    </div>
)
}
export default ToDoTitle;