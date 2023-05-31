import { useEffect, useState } from "react";
import { addPost, editPost, getPost } from "../service/postsServices";

const PostForm = ({id}) => {
  const [state, setState] = useState({
    title: "",
    text: ""
  });

  let btnPlaceholder = "Add";

  if(id != undefined) {
    btnPlaceholder = "Edit";
  }
  
  useEffect(() => {
    if(id != undefined) {
      getPost(id).then(({data}) => setState(data));
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = (event, state) => {
    event.preventDefault();

    if(id == undefined) {
      addPost(
        state.title,
        state.text
      );
    }else {
      editPost(
        state.title,
        state.text,
        id
      );
    }

    resetInput();
  }

  const resetInput = () => {
    setState({
      title: "",
      text: ""
    });
  }

  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
      <form onSubmit={(event) => handleAdd(event, state)} style={{width: "400px"}}>
        <div className="mb-3" >
          <label for="title" className="form-label">Title</label>
          <input name="title" value={state.title} onChange={handleInputChange} type="text" className="form-control" id="title" placeholder="Title"  aria-describedby="emailHelp" minLength={2} required/>
        </div>
        <div className="mb-3">
          <label for="floatingTextarea2" className="mb-2">Content</label>
          <textarea name="text" value={state.text} onChange={handleInputChange} className="form-control" placeholder="Post content" id="floatingTextarea2" maxLength={300} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">{btnPlaceholder}</button>
        <button type="button" className="btn btn-secondary" style={{marginLeft: '10px'}} onClick={resetInput}>Reset</button>
      </form>
    </div>
  )
}

export default PostForm;