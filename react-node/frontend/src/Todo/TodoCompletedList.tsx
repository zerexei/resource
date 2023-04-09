import React from 'react'

import { Todo } from '.';

type TodoCompletedListProps = {
    todos: Todo[];
}
const TodoCompletedList = ({ todos }: TodoCompletedListProps) => {
    return (
        <div>
            <h2>Completed</h2>
            <ul className='space-y-4'>
                {
                    todos.map((todo) => {
                        if (todo.completed) {
                            return <li key={todo.id} className='line-through'>{todo.title}</li>;
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default TodoCompletedList