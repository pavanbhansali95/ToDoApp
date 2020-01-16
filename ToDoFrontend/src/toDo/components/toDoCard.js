import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import ToDoTitle from '../components/toDoTitle';
import ToDoDescription from '../components/toDoDescription';
import BackspaceIcon  from '@material-ui/icons/Backspace';
import './toDoCard.scss';
const ToDoCard  = React.memo(props => {
    console.log('todocard');
    const [showDescription, setShowDescription] = useState(false);
    const cardStyle = {
    background: 'aliceblue',
    height: 'auto',
    'min-height': '50px',
    margin: '0 auto',
    width: '80%',
    display: 'flex',
    border: '1px solid red',
    'flex-direction': 'row',
    'justify-content': 'center',
    'align-items': 'center'
    };
    return(
        <Card style={cardStyle} className="card">
            <div className="div2">
            <div>
            <ToDoTitle onClick = {() => {
                setShowDescription(!showDescription);
            }} title = {props.title} />
            </div>        
            <div>
            { (showDescription === true) ?
            <ToDoDescription description = {props.description} /> : ''
            }
            </div>
            </div>
            <div className="div3">
            <BackspaceIcon onClick = {props.deleteCard} />
            </div>
            </Card>
    )
});
export default ToDoCard;
