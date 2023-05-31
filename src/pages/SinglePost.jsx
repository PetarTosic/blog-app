import { useParams } from "react-router-dom";
import AppPost from "../components/AppPost"

const SinglePost = () => {
  const {id} = useParams();

  return <AppPost id={id}/>
}

export default SinglePost;