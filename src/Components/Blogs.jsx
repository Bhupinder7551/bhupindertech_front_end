import React, { useState, useRef, useEffect,useContext } from "react";
import image from "../img/cubes.jpg";
import blogContext from "../context/blogs/blogContext";

function Blogs() {

  const blogContext_ = useContext(blogContext);
  const {blogs,fetchUsers, remove_, addNote, editNote} = blogContext_
  // const [blogs, setblogs] = useState([]);
  const [editblogs, seteditblogs] = useState({
    id: "",
    etitle: "",
    ebody: "",
    eauthor: "",
  });

  const [newblogs, setnewblogs] = useState({ title: "", body: "", author: "" });
  useEffect(() => {
    if(localStorage.getItem('token')){
    fetchUsers();
    }
  }, []);
  //update data
  const ref = useRef(null);
  const refClose = useRef(null);

  const onChange = (e) => {
    seteditblogs({ ...editblogs, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    editNote(
      editblogs.id,
      editblogs.etitle,
      editblogs.ebody,
      editblogs.eauthor
    );
    refClose.current.click();
  };

  //add data
  const add_ref = useRef(null);
  const add_refClose = useRef(null);

  const open_addblog = () => {
    add_ref.current.click();
  };
  const add_onChange = (e) => {
    setnewblogs({ ...newblogs, [e.target.name]: e.target.value });
  };
  const add_handleClick = () => {
    console.log("submit clicked");
    console.log(newblogs.title, newblogs.body, newblogs.author);
    //newblogs(newblogs.title,newblogs.body,newblogs.author);
    addNote(newblogs.title, newblogs.body, newblogs.author);
    setnewblogs({ title: "", body: "", author: ""})
    add_refClose.current.click();
  };

  // // Fetch all data
  // const fetchUsers = async () => {
  //   const res = await fetch("http://localhost:5000/api/blogs");
  //   const data = await res.json();
  //   try {
  //     setblogs(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // // add note
  // const addNote = async (title, body, author) => {
  //   const response = await fetch(`http://localhost:5000/api/addblog`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ title, body, author }),
  //   });
  //   const blog = await response.json();

  //   console.log("Adding a new blog");

  //   setblogs(blogs.concat(blog));
  // };

  // // delete note
  // const remove_ = (id) => {
  //   fetch(`http://localhost:5000/api/blogs/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const newBlogs = blogs.filter((x) => {
  //     return x._id !== id;
  //   });
  //   setblogs(newBlogs);
  // };
  // get data with id
  const getDataForUpdate = (currentNote) => {
    ref.current.click();
    seteditblogs({
      id: currentNote._id,
      etitle: currentNote.title,
      ebody: currentNote.body,
      eauthor: currentNote.author,
    });
  };

  // // edit note
  // const editNote = async (id, title, body, author) => {
  //   const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ title, body, author }),
  //   });
  //   const json = await response.json();

  //   console.log("updating  a new blog");

  //   let newBlogs = JSON.parse(JSON.stringify(blogs));

  //   console.log("ew blog", newBlogs);
  //   for (let index = 0; index < newBlogs.length; index++) {
  //     const element = newBlogs[index];
  //     if (element._id === id) {
  //       newBlogs[index].title = title;
  //       newBlogs[index].body = body;
  //       newBlogs[index].author = author;
  //       break;
  //     }
  //   }
  //   setblogs(newBlogs);
  // };

  return (
    <div className="news">
      <div className="row my-3">
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade  text-dark"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      value={editblogs.etitle}
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="ebody"
                      value={editblogs.ebody}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="eauthor"
                      value={editblogs.eauthor}
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  className="btn btn-primary"
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <button
          ref={add_ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade text-dark"
          id="exampleModal2"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title dark" id="exampleModalLabel">
                  Add Blog
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="title"
                      aria-describedby="emailHelp"
                      onChange={add_onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="body"
                      onChange={add_onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="author"
                      onChange={add_onChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  ref={add_refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={add_handleClick}
                  type="button"
                  className="btn btn-primary"
                >
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn" onClick={open_addblog}>
        Add blogs <i className="fa fa-plus" aria-hidden="true"></i>
      </button>

      {/* <!-- Button trigger modal --> */}

      {/* <!-- Modal --> */}

      <div className="d-flex justify-content-evenly flex-nowrap newscard">
        {blogs.slice(0, 4).map((e) => {
          return (
            <div className="card" key={e._id}>
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{e.title.slice(0, 20)}...</h5>

                <p className="card-text">{e.body}</p>

                <small className="text-muted">{e.author ? e.author : ""}</small>
                <br></br>
                <div className="d-flex justify-content-center">
                  <button className="btn bg-light" onClick={() => remove_(e._id)}>
                    {" "}
                    <i className="fa-solid fa-circle-minus text-danger"></i>
                  </button>
                  <button className="btn bg-light" onClick={() => getDataForUpdate(e)}>
                    {" "}
                    <i  className="fa-solid fa-pen-to-square text-info"></i>
                  </button>
                 
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="btn"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        All Blogs
      </button>
    </div>
  );
}

export default Blogs;
