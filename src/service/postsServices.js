import { API } from '../shared/api';

export const getPosts = () => {
  return API.get('/posts/?filter={"include":["comments"]}');
}

export const getPost = (id) => {
  return API.get(`/posts/${id}?filter={"include":["comments"]}`);
}

export const deletePostId = (id) => {
  return API.delete(`/posts/${id}`);
}

export const addComment = (text, postId) => {
  return API.post('/comments', {
    text,
    postId
  })
}

export const addPost = (
  title,
  text
) => {
  return API.post('/posts', {
    title,
    text
  });
}

export const editPost = (
  title,
  text,
  id
) => {
  return API.put(`/posts/${id}`, {
    title,
    text
  })
}