import './App.css';
import { useEffect, useState, createContext } from 'react';
import { Route, Routes, Link, BrowserRouter, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Home';

export const UsersContext = createContext();

export default function App() {
  const [posts, setPosts] = useState([])
  const baseUrl = 'https://boolean-uk-api-server.fly.dev/Julia-Lindgren/post';

  const fetchPosts = async () => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        console.log(posts)
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <UsersContext.Provider value={{ posts, setPosts }}>
      <>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </>
    </UsersContext.Provider>
  );
}