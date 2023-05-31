import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllPosts from './pages/AllPosts';
import AddPost from './pages/AddPost';
import SinglePost from './pages/SinglePost';
import EditPost from './pages/EditPost';

function App() {
  return (
    <Routes>
      <Route index element={<AllPosts />}></Route>
      <Route path='/add' element={<AddPost />}></Route>
      <Route path='/post/:id' element={<SinglePost />}></Route>
      <Route path='/edit/:id' element={<EditPost />}></Route>
    </Routes>
  );
} 

export default App;
