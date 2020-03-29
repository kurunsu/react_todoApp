import React, { useState } from 'react'

const Form = () => {
    const initialState = [
        {
            task: 'サンプルテキスト１',
            isCompleted: false
        },
        {
            task: 'サンプルテキスト２',
            isCompleted: false
        },
        {
            task: 'サンプルテキスト３',
            isCompleted: false
        },     
    ]

    const [todos, setTodo] = useState(initialState);

    const [task, setTask] = useState('')

    const handleNewTask = (event) => {
        setTask( event.target.value )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(task === '') return
        setTodo(todos => [...todos,{ task, isCompleted: false}])
        setTask('')
    }

    const handleRemoveTask = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodo(newTodos)
    }

    return (
        <div class="wrap">
            <div class="inner">
                <h1>Todo App</h1>
                <form onSubmit={ handleSubmit }>
                <input value={ task } placeholder="ここにTodoを入力" onChange={handleNewTask}/></form>
                <ul>
                { todos.map((todo, index) => (
                <li key={ index }>
                <span onClick={ () =>handleRemoveTask(index) }>
                ☑️
                </span>
                { todo.task }
                </li>
                ))}
                </ul>
            </div>
        </div>
  );
}

export default Form