import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userID = userIdElement.current.value;
    const postTitle = titleElement.current.value;
    const postBody = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userID, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userID" className="form-label">
          User-ID
        </label>
        <input
          type="username"
          ref={userIdElement}
          className="form-control"
          id="userID"
          placeholder="Enter your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Description
        </label>
        <textarea
          type="text"
          rows="4"
          ref={bodyElement}
          className="form-control"
          id="body"
          placeholder="Write more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many peoples reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags (#)
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter your hashtags here"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
