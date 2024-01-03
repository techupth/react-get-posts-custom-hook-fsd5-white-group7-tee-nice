import React from "react";
import { useNavigate } from "react-router-dom";
import { useBlogPost } from "../../contexts/useBlogPosts";

const HomePage = () => {
  const navigate = useNavigate();
  const { posts, isError, isLoading, getPosts } = useBlogPost();

  const renderPost = (post) => (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <div className="post-actions">
        <button
          className="view-button"
          onClick={() => navigate(`/post/view/${post.id}`)}
        >
          View post
        </button>
        <button className="edit-button">Edit post</button>
      </div>
      <button className="delete-button">x</button>
    </div>
  );

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Posts</h1>
        <button>Create Post</button>
      </div>

      <div className="board">{posts.map(renderPost)}</div>

      {isError && <h1>Request failed</h1>}
      {isLoading && <h1>Loading ....</h1>}
    </div>
  );
};

export default HomePage;
