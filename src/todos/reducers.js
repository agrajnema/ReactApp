import {CREATE_TODO, REMOVE_TODO} from './actions';

export const todos = (state = [], action) => {
    const {type, payload} = action;

    switch(type){
        case (CREATE_TODO): {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false
            }
            
            state = state.concat(newTodo);
            console.log(state);
            return state;
        }
        case(REMOVE_TODO): {
            console.log('here');
            const {text} = payload;
            return state.filter(todo => todo.text !== text);
        }
        default: 
            return state;
    }
}