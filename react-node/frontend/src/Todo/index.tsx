import { useState } from 'react'
import TodoCompletedList from './TodoCompletedList';
import TodoList from './TodoList';
import TodoCreateForm from './TodoCreateForm';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export default () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    function generateTodos() {
        setTodos([...todos, {
            id: todos.length + 1,
            title: `Todo ${todos.length + 1}`,
            completed: false,
        }]);
    }

    function completeTask(todo_id: number) {
        const updatedTodos: Todo[] = todos.map((todo) => {
            if (todo.id === todo_id) {
                todo.completed = true;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const handleAddTodo = (title: string) => {
        const new_todo: Todo = {
            title,
            id: todos.length + 1,
            completed: false,
        };
        setTodos([...todos, new_todo]);
    }

    return (
        <div>
            <TodoCreateForm onSubmit={handleAddTodo} />
            <TodoList todos={todos} completeTask={completeTask} />
            <hr className="my-6" />
            <TodoCompletedList todos={todos} />

            <button onClick={() => generateTodos()} className='absolute right-4 top-4'>generate</button>
        </div>
    )
}
