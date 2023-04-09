import React, { useRef, useState } from 'react';
import { PostType } from '.';

type PostEditType = {
  post: PostType | null;
  onSubmit: (post: PostType) => void;
  onCancel: () => void;
};

const PostEdit = ({ post, onSubmit, onCancel }: PostEditType) => {
  const formRef = useRef<HTMLFormElement>(null);
  const host = 'http://localhost:3001';

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!formRef.current) return; // log error

    const formData = new FormData(formRef.current);

    if (formData.get('title') === '') return;

    const res = await fetch(`${host}/posts`, {
      method: 'PATCH',
      body: formData,
    });

    const post = await res.json();
    console.log(post);

    // onSubmit(post);
  }
  if (!post?.id) return <span></span>;

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
        <h2 className="text-2xl">Edit a post {post.id}</h2>
        {/* TITLE */}
        <div className="text-left">
          <label htmlFor="title" className="block mb-px">
            Title
          </label>
          <input
            defaultValue={post.title}
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
            defaultValue={post.content}
            name="content"
            id="content"
            className="w-full px-4 py-2"
          ></textarea>
        </div>
        {/* Publish */}
        <div className="flex justify-center items-center gap-2">
          <input
            id="publish"
            type="checkbox"
            name="published"
            checked={post.published}
          />
          <label htmlFor="publish" className="cursor-pointer select-none">
            publish?
          </label>
        </div>
        {/* Submit */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            type="submit"
            className="py-2 px-6 bg-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-6 bg-blue-500 hover:bg-blue-600"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostEdit;
