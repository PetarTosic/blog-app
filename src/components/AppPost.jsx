import { useEffect, useState } from "react";
import { getPost } from "../service/postsServices";
import { Link } from "react-router-dom";
import AddComment from "./AddComment";
import { useFormattedDate } from "./useFormattedDate";

const AppPost = ({id}) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getPost(id).then(({data}) => {
      setPost(data);
      setComments(data.comments);
    });
  }, []);


  return <div>
    <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary" style={{display: "flex", justifyContent: "center"}}>
      <div className="col-lg-6 px-0" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <h1 className="display-4 fst-italic">{post.title}</h1>
        <p className="lead my-3">{useFormattedDate(post.createdAt)}</p>
        <p className="lead my-3">{post.text}</p>
        <Link to={`/edit/${post.id}`} className="btn btn-secondary">Edit</Link>
      </div>
    </div>
    <div className="container">
      {comments.map((comment, index) => {
        return(
          <div key={index} style={{border: "1px solid black", borderRadius: "5px", fontSize: "20px", padding: "5px", margin: "5px"}}>{comment.text}</div>
        )
      })}
      <AddComment postId={post.id} setComments={setComments} />
    </div>
  </div>
}

export default AppPost;