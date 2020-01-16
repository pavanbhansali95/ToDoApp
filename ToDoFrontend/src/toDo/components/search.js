import React, { useState, useEffect, useRef } from 'react';
import './search.scss';
import Card from '@material-ui/core/Card';
import axios from 'axios';
const Search = React.memo(props => {
    const {filterToDoList} = props;
    const inputRef = useRef();
    const cardStyle = {
        background: 'aliceblue',
        height: 'auto',
        'min-height': '30px',
        margin: '0 auto',
        width: '80%',
        display: 'flex',
        border: '1px solid',
        'border-radius': '10px',
        'flex-direction': 'row',
        'justify-content': 'center',
        'align-items': 'center'
        };
     const [enteredTitle,setEnteredTitle ] = useState('');
     const [ responseData, setResponseData ] = useState(null);
     useEffect(() => {
         if(responseData === null){
        const headers = {
            "headers": {
                "access-token": localStorage.getItem("userToken")
            }
        };
        axios.get('http://localhost:8000/todo/getToDoItems', headers).then(res => {
            setResponseData(res.data.data.result[0].items);
            filterToDoList(res.data.data.result[0].items);
        }).catch(err => {
            alert("error occured");
        });
    } else {
            if(enteredTitle === ''){
                filterToDoList(responseData);
            } else {
            const updatedData = [...responseData].filter(data => data.title.toUpperCase() === enteredTitle.toUpperCase());
            filterToDoList(updatedData);
            }
        
       
    }
       return () => {
          //  clearTimeout(timer);
       }
     },[enteredTitle, filterToDoList,responseData]);
    return (
      <section className="search">
        <Card style = {cardStyle}>
          <div className="search-input">
            <label>Filter by Title</label>
            <input ref = {inputRef} onChange = {event => setEnteredTitle(event.target.value)} type="text" />
          </div>
        </Card>
      </section>
    );
  });
  
  export default Search;