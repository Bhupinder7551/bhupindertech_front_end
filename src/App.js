import React, { useState } from "react";
import "./style/App.css";
import "./style/style.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Service from "./Components/Service";
import Aboutus from "./Components/Aboutus";
import News from "./Components/News";
import Login from "./Components/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./Components/Blogs";
import BlogState from "./context/blogs/BlogState";
import Signup from "./Components/Signup";

function App() {
  const apiKey = "29da1371a62c4864a9b35668e5e536b6";
  return (
    <BlogState>
    <Router>
      <div className="App">
        {/* <Navbar />
        <Header />
        <Blogs /> */}
        <Routes>

          <Route path="/" element={ [<Navbar />, <Header />,  <Blogs /> ,  <News
                apiKey={apiKey}
                key="general"
                country="in"
                category="general"
              />,       <Service />,<Aboutus /> ]} />
              <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          

        </Routes>
        {/* <News
                apiKey={apiKey}
                key="general"
                country="in"
                category="general"
              />
        <Service />
        <Aboutus /> */}
      </div>
    </Router>
    </BlogState>
  );
}

export default App;
