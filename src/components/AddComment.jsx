import { useState } from "react";
import { addComment } from "../service/postsServices";

const AddComment = ({postId, setComments}) => {
  const [state, setState] = useState({
    text: ""
  });

  const resetInput = () => {
    setState({text: ""});
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = (event, state) => {
    event.preventDefault();

    addComment(state.text, postId);

    setComments((prevState) => [...prevState, {text: state.text, postId: postId}])

    resetInput();
  }

  return (
    <div className="container mt-5">
      <form onSubmit={(event) => handleAdd(event, state)} style={{width: "400px"}}>
        <div className="mb-3">
          <label for="floatingTextarea2" className="mb-2">Add Comment</label>
          <textarea name="text" value={state.text} onChange={handleInputChange} className="form-control" placeholder="Comment" id="floatingTextarea2" maxLength={300} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddComment;