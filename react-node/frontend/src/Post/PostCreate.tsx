import React, { useRef, useState } from 'react';
import { PostType } from '.';

type PostCreateType = {
  onSubmit: (post: PostType) => void;
};
const PostCreate = ({ onSubmit }: PostCreateType) => {
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
      method: 'Post',
      body: formData,
    });

    const post = await res.json();

    onSubmit(post);
    setTitle('');
    setContent('');
  }

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
        <h2 className="text-2xl">Create a post</h2>
        {/* TITLE */}
        <div className="text-left">
          <label htmlFor="title" className="block mb-px">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            id="title"
            className="w-full py-2 px-4 rounded"
          />
        </div>
        {/* CONTENT */}
        <div className="text-left">
          <label htmlFor="content" className="block mb-px">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
            id="content"
            className="w-full"
          ></textarea>
        </div>
        {/* Publish */}
        <div className="flex justify-center items-center gap-2">
          <input id="publish" type="checkbox" name="published" />
          <label htmlFor="publish" className="cursor-pointer select-none">
            publish?
          </label>
        </div>
        {/* Submit */}
        <div>
          <button type="submit" className="py-2 px-6 bg-gray-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
