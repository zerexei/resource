import React, { useEffect, useRef, useState } from 'react';
import PostList from './PostList';
import PostCreate from './PostCreate';
import PostShow from './PostShow';
import PostEdit from './PostEdit';

export interface PostType {
  id: number;
  title: string;
  content?: string;
  published: boolean;
}

const Post = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);
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

  async function handleDelete(post_id: number) {
    const res = await fetch(`${host}/posts/${post_id}`, {
      method: 'DELETE',
    });

    setPosts((prevPosts) => {
      return prevPosts.filter(({ id }) => id !== post_id);
    });
  }

  async function handleSelectedPost(post_id: number) {
    const res = await fetch(`${host}/posts/${post_id}`);
    console.log(await res.json());

    const selected_post = posts.find(({ id }) => id === post_id);
    if (!selected_post) return;
    setSelectedPost(selected_post);
  }

  function handleCancel() {
    setSelectedPost(null);
  }
  return (
    <div className="flex gap-12 border border-red-400 p-12 text-left">
      <div className="flex-1">
        <PostShow post={selectedPost} />
        <hr className="my-6" />
        <PostList
          posts={posts}
          handleDelete={handleDelete}
          handleSelectedPost={handleSelectedPost}
        />
      </div>
      <div className="flex flex-col w-[33rem]">
        <PostCreate onSubmit={appendPost} />
        <PostEdit
          post={selectedPost}
          onSubmit={() => {}}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default Post;
