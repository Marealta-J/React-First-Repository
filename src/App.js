import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import PostItem from "./components/PostItem";
import './styles/App.css'
import MyButton from "./components/UI/button/MyButton";
import MyInput from './components/UI/input/MyInput'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'lorem1', body: 'Description1'},
    {id: 2, title: 'lorem2', body: 'Description2'},
    {id: 3, title: 'lorem3', body: 'Description3'},
    {id: 4, title: 'lorem4', body: 'Description4'},
  ])

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Название поста"
        />
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost} >Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов1"/>
    </div>
  );
}

export default App;
