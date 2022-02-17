// import { ADD_TODO } from "../constatns";
export const addTodo = (content) => {
    return {
        type: 'ADD_TODO',
        payload: content,
    }
}