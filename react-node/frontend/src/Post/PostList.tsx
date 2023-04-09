import React from 'react';
import { PostType } from '.';

type PostListType = {
  posts: PostType[];
};

const PostList = ({ posts }: PostListType) => {
  function publishedCss({ published }: PostType): string {
    if (!published) return '';
    return 'text-green-400';
  }
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li>
              <div className="py-2">
                <h3 className={`text-bold ${publishedCss(post)}`}>
                  title: {post.title}
                </h3>
                {post.content && (
                  <p className={`ml-4 ${publishedCss(post)}`}>
                    - {post.content}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
