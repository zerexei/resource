import React, { useRef, useState } from 'react'

const Post = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const formRef = useRef<HTMLFormElement>(null);
    const host = 'http://localhost:3001';

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (!formRef.current) return; // log error

        const formData = new FormData(formRef.current);

        if (formData.get('title') === '') return;

        const res = await fetch(`${host}/posts`, {
            method: "Post",
            body: formData
        })

        console.log(await res.json());


        setTitle('');
        setContent('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit} ref={formRef}>
                <h2>Create a post</h2>
                <div>
                    <label htmlFor="title">Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} name="content" id="content"></textarea>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Post