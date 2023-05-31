import { useEffect, useState } from "react";
import { deletePostId, getPosts } from "../service/postsServices";
import { Link } from "react-router-dom";

const AppPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(({data}) => {
      setPosts(data);
    });
  }, []);

  const deletePost = (id) => {
    deletePostId(id);
    setPosts((prevState) =>
      prevState.filter((post) => post.id !== id)
    );
  }

  const comNum = (id) => {
    return posts[id].comments.length;
  }

  return (
    <div className="row mb-2 ml-5" style={{margin: "20px"}}>
      {posts.map((post, index) => {
        return(
          <div key={index} className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">{post.title}</h3>
                <div className="mb-1 text-body-secondary">{post.createdAt}, Comments: {comNum(index)}</div>
                <p className="card-text mb-auto">{post.text}</p>
                <div>
                  <Link to={`/post/${post.id}`} className="btn btn-secondary icon-link gap-1 icon-link-hover mt-2">
                    View Post
                  </Link>
                <button onClick={() => deletePost(post.id)} className="btn btn-danger icon-link gap-1 icon-link-hover mt-2" style={{marginLeft: "5px"}}>Delete Post</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AppPosts;