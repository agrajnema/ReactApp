import React from 'react';
import { hot } from 'react-hot-loader';
import './app.css';
import TodoList from './todos/TodoList/TodoList';

const App = () => (
    <div className= "App">
        <TodoList />        
    </div>
);

export default hot(module)(App);