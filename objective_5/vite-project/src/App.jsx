import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
        setError('');
      })
      .catch(err => {
        console.error('API Error:', err);
        setError('Failed to fetch data.');
        setPosts([]);
      });
  }, []);

  const filteredPosts = Array.isArray(posts)
    ? posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="container">
      <h1>Posts Dashboard</h1>
      {error && <p className="error">{error}</p>}

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.id} className="card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
