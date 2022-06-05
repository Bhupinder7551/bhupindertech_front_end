import BlogContext from "./blogContext";
import { useState } from "react";

const BlogState = (props) => {
  const authtoken = localStorage.getItem('token')
  const [blogs, setblogs] = useState([]);
  // Fetch all data
  const fetchUsers = async () => {
    const res = await fetch(
      `http://localhost:5000/api/blogs`,

      {
        method: "GET",
        headers: {
          "auth-token": authtoken,
        },
      }
    );
    const data = await res.json();
    try {
      setblogs(data);
    } catch (err) {
      console.log(err);
    }
  };
  //add note
  const addNote = async (title, body, author) => {
    const response = await fetch(`http://localhost:5000/api/addblog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
      },
      body: JSON.stringify({ title, body, author }),
    });
    const blog = await response.json();

    console.log("Adding a new blog");

    setblogs(blogs.concat(blog));
  };
  // delete note
  const remove_ = (id) => {
    fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
      },
    });
    const newBlogs = blogs.filter((x) => {
      return x._id !== id;
    });
    setblogs(newBlogs);
  };
  // Edit a Note
  const editNote = async (id, title, body, author) => {
    const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
      },
      body: JSON.stringify({ title, body, author }),
    });
    const json = await response.json();

    console.log("updating  a new blog");

    let newBlogs = JSON.parse(JSON.stringify(blogs));

    console.log("ew blog", newBlogs);
    for (let index = 0; index < newBlogs.length; index++) {
      const element = newBlogs[index];
      if (element._id === id) {
        newBlogs[index].title = title;
        newBlogs[index].body = body;
        newBlogs[index].author = author;
        break;
      }
    }
    setblogs(newBlogs);
  };

  return (
    <BlogContext.Provider
      value={{ blogs, fetchUsers, remove_, addNote, editNote }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
