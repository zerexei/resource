import React, { useEffect, useRef, useState } from 'react';
import PostList from './PostList';

export interface PostType {
  title: string;
  content?: string;
  published: boolean;
}

const Post = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const host = 'http://localhost:3001';

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await fetch(`${host}/posts`);
    setPosts(await res.json());
  }

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

    setTitle('');
    setContent('');
    setPosts((prevData) => [...prevData, post]);
  }

  return (
    <div className="flex gap-4 border border-red-400 p-12 text-left">
      <div className='flex-1'>
        <PostList posts={posts} />
      </div>
      <div className='flex-1'>
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
    </div>
  );
};

export default Post;
