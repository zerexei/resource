import React from 'react'

import { Todo } from '.';

type TodoListProps = {
    todos: Todo[];
    completeTask: (id: number) => void;
}
const TodoList = ({ todos, completeTask }: TodoListProps) => {
    return (
        <div className='mb-6'>
            <h2>Todo</h2>
            <ul>
                {
                    todos.map((todo) => {
                        if (!todo.completed) {
                            return <li onClick={() => completeTask(todo.id)} key={todo.id}>{todo.title}</li>;
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList