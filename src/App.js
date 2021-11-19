import React, { useState, useEffect } from "react";
import Post from "./Post";
import Pagination from "./Pagination";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => setError(error.message));
  }, []);
  if (error) return <h1>{error}</h1>;
  return (
    <div className="App">
      <div className="card-container">
        {posts.length > 0 && (
          <Pagination
            RenderComponent={Post}
            data={posts}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        )}
      </div>
    </div>
  );
}

export default App;
