import React, { useState } from "react";
import "./App.module.css";
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from './scripts/actions/todoActions';
// import {ADD_TODO} from './components/constatns.js';
import Button from '@material-ui/core/Button';


function App() {
  const dispatch =useDispatch();
  const state = useSelector(state=> state.todosState.todos);
  let [value, setValue] = useState('')
  const changeValue = (e) => { setValue(e.target.value); };


  return (
    <>
  <Button variant="contained" color="primary">
      Hello World
    </Button>




      {/* <input type="text" value={value} onChange={changeValue} />
      <button onClick={()=>{dispatch({type: 'ADD_TODO',
        payload: value});setValue('')}} disabled={!value.trim()}>add</button>
      <ul>
        
        {state.map((i, index) => { return <li key={index}>
          <input type="checkbox" checked={i.completed} onChange={()=>{dispatch({type:'TOGGLE_TASK', payload: index })}}/> 
        {i.content}: {i.completed ? 'well done' : 'do it'}
        <button onClick={(index)=>{dispatch({type: 'DELETE_TASK',payload: index})}}>DELETE</button>
        </li> })}
      </ul>
      <button onClick={()=>{dispatch({type: 'DELETE_DONE',payload: null})}}>delete 'done'</button> */}
    </>
  )
}

export default App;


