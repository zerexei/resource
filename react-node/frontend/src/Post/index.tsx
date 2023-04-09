import React, { useEffect, useRef, useState } from 'react';
import PostList from './PostList';
import PostCreate from './PostCreate';

export interface PostType {
  title: string;
  content?: string;
  published: boolean;
}

const Post = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const host = 'http://localhost:3001';

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await fetch(`${host}/posts`);
    setPosts(await res.json());
  }

  async function appendPost(post: PostType) {
    setPosts((prevPosts) => [...prevPosts, post]);
  }

  return (
    <div className="flex gap-4 border border-red-400 p-12 text-left">
      <div className="flex-1">
        <PostList posts={posts} />
      </div>
      <PostCreate onSubmit={appendPost} />
    </div>
  );
};

export default Post;
