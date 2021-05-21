import React from 'react';
import {connect} from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';
import {removeTodo} from '../actions';
import './TodoList.css';
import NewTodoForm from '../NewTodoForm/NewTodoForm';

const TodoList = ({todos = [], onRemovePressed }) => (
    <div className="list-wrapper">
    <NewTodoForm />
         { todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />) }
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);