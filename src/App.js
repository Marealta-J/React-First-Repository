import React, { useState } from "react";
import PostList from "./components/PostList";
import PostItem from "./components/PostItem";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'lorem1', body: 'Description1'},
    {id: 2, title: 'lorem2', body: 'Description2'},
    {id: 3, title: 'lorem3', body: 'Description3'},
    {id: 4, title: 'lorem4', body: 'Description4'},
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'lorem1', body: 'Description1'},
    {id: 2, title: 'lorem2', body: 'Description2'},
    {id: 3, title: 'lorem3', body: 'Description3'},
    {id: 4, title: 'lorem4', body: 'Description4'},
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов1"/>
      <PostList posts={posts2} title="Список постов2"/>

    </div>
  );
}

export default App;
