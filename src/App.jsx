import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import "./App.css";

function App() {
  return (
    <Router basename="/blog">
      <div className="app-container">
        <h1>📰 Blog Viewer</h1>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
