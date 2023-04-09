import React, { useState } from 'react'
import { Todo } from '.'

type TodoCreateFormProps = {
    onSubmit: (titte: string) => void;
}

const TodoCreateForm = ({ onSubmit }: TodoCreateFormProps) => {
    const [title, setTitle] = useState<string>('');

    function handleSubmit() {
        onSubmit(title);
        setTitle('');
    }

    return (
        <div className='mb-6'>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='px-4 py-2' />
            <button className='uppercase' onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default TodoCreateForm