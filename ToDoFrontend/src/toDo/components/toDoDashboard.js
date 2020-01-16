import { useState, useEffect, useCallback } from "react";
import React from 'react';
import  ToDoCard  from './toDoCard';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import ToDoAddItem from "./toDoAddItem";
import Search from "../components/search";

const ToDoDashboard = (props) => {
    const [toDoItems, setToDoItems] = useState([]);
    const [openAddItemPopup, setopenAddItemPopup] = useState(false);
    const dashboardStyles = {
        heading: {
            'margin-top': '20px',
            'margin-right': 'auto',
            'margin-bottom': '15px',
            'margin-left': 'auto',
            display: 'flex',
            width: '90%',
            'color': '61DAFA'
        }
    };
    useEffect(() => {
        
   
    }, []);
    const addToDoItem = useCallback( ()=> {
        setopenAddItemPopup(true);
    },[]);
    const onProceed = (title, description) => {
        const headers = {
            "headers": {
                "access-token": localStorage.getItem("userToken")
            }
        };
        let itemId = Math.random().toString(36).substring(4);
        const data = {
            itemid: itemId,
            title: title,
            description: description
        };
        axios.post('http://localhost:8000/todo/addItem', data, headers).then(res => {
            setToDoItems([
                ...toDoItems,
                {
                    itemId: itemId,
                    title: title,
                    description: description
                }
            ]);
            setopenAddItemPopup(false);
        }).catch(error => {
            alert(error.response.data.status.message);
            setopenAddItemPopup(false);
        })

    }
    const onCancel = () => {
        setopenAddItemPopup(false);
    }
    const filterToDoList = useCallback(toDoData => {
  
            setToDoItems(
                toDoData
            );
    },[]);
    const deleteCard = (itemid) => {
        const headers = {
            "headers": {
                "access-token": localStorage.getItem("userToken")
            }
        };
        axios.delete(`http://localhost:8000/todo/deleteItem/${itemid}`, headers).then(res => {
            const updatedToDoItems = [...toDoItems].filter(toDoItem => toDoItem.itemid !== itemid);
            setToDoItems(
                updatedToDoItems
            );
        }).catch(error => {
            alert(error.response.data.status.message);
        });

    }
    
    return (
           <div>
                <div style={dashboardStyles.heading}>
                    <span style={{'padding-left': '70px'}}>
                        <h1> My Notes </h1>
                    </span>
                    <span style={{ paddingLeft: "10px", paddingTop: "20px", paddingRight: "380px" }}>
                        <Fab size="medium" color="secondary" aria-label="add">

                            <AddIcon onClick={addToDoItem} />
                        </Fab>
                    </span>
                    <span>
                        <Search filterToDoList = {filterToDoList} />
                    </span>
                </div>
                {toDoItems.map((toDoItem, key) => {
                    return (
                        <div>
                            <ToDoCard deleteCard={deleteCard.bind(this, toDoItem.itemid)} description={toDoItem.description} title={toDoItem.title} />
                            <br />
                        </div>
                    );
                })

                } 
                {
                    (openAddItemPopup === true) ? <ToDoAddItem open={openAddItemPopup} onCancel={onCancel} onProceed={onProceed} /> : null
                }
            </div>  
        
    );

}
export default ToDoDashboard;

