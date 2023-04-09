import React from 'react';
import { PostType } from '.';

type PostListType = {
  posts: PostType[];
  handleDelete: (post_id: number) => void;
  handleSelectedPost: (post_id: number) => void;
};

const PostList = ({
  posts,
  handleDelete,
  handleSelectedPost,
}: PostListType) => {
  function publishedCss({ published }: PostType): string {
    if (!published) return '';
    return 'text-green-400';
  }
  return (
    <div>
      <h2>Posts</h2>
      <p>{posts.map(({ id }) => id)}</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} onClick={() => handleSelectedPost(post.id)}>
              <div className="py-2 px-4 rounded flex items-center hover:bg-gray-600 cursor-pointer">
                <div className="flex-1">
                  <h3 className={`text-bold ${publishedCss(post)}`}>
                    title: {post.title}
                  </h3>
                  {post.content && (
                    <p className={`ml-4 ${publishedCss(post)}`}>
                      - {post.content}
                    </p>
                  )}
                </div>
                <div className="space-x-2">
                  <button className="p-0 text-xs bg-transparent text-green-400">
                    Publish
                  </button>
                  <button className="p-0 text-xs bg-transparent text-blue-400">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-0 text-xs bg-transparent text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
