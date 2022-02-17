// import { ADD_TODO } from "../constatns";
// import { addTodo } from '../actions/todoActions.js';
const initialState = {
    todos: [
        { content: 'play', id: 1, completed: false },
        { content: 'sleep', id: 2, completed: true },
        { content: 'sing', id: 3, completed: false }
    ]
}
export default function todoReducer(state = initialState, { type, payload }) {

    if (type === 'ADD_TODO') {
        const todos = [...state.todos];
        todos.push({ content: payload, id: +new Date(), completed: false });
        return {...state, todos }
    } else if (type === 'DELETE_TASK') {
        const todos = [...state.todos];
        todos.splice(payload, 1);
        return {...state, todos }
    } else if (type === 'TOGGLE_TASK') {
        const todos = [...state.todos];
        todos[payload].completed = !todos[payload].completed;
        console.log(todos)
        return {...state, todos }
    } else if (type === 'DELETE_DONE') {
        const todos = [...state.todos].filter(i => { return !i.completed });
        return {...state, todos }
    } else { return state }
}