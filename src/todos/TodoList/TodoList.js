import React from 'react';
import {connect} from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';
import {removeTodo,markAsCompleted} from '../actions';
import './TodoList.css';
import NewTodoForm from '../NewTodoForm/NewTodoForm';

const TodoList = ({todos = [], onRemovePressed, onMarkCompletedPressed }) => (
    <div className="list-wrapper">
    <NewTodoForm />
         { todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}  onMarkCompletedPressed={onMarkCompletedPressed}/>) }
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkCompletedPressed: text => dispatch(markAsCompleted(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);