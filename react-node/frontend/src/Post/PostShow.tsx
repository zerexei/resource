import React from 'react';
import { PostType } from '.';

type PostShowType = {
  post?: PostType | null;
};
const PostShow = ({ post }: PostShowType) => {
  if (!post?.id) return <span></span>;
  return (
    <div>
      <h3>Show Post {post.id}</h3>
      <div>{post.title}</div>
      {post.content && <p>{post.content}</p>}
    </div>
  );
};

export default PostShow;
