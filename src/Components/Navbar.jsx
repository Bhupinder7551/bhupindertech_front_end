import { Link } from "react-router-dom";
function Navbar() {
  const handlelogout=()=>{
    localStorage.removeItem('token');
    window.location.replace('/login');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            BhupinderTech
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Contact Us
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('token')?
            <form className="d-flex ">
              <Link className="nav-link" aria-current="page" to="/signup">
                Register
              </Link>
              <Link className="nav-link" aria-current="page" to="/login">
                Login
              </Link>
            
            </form>:  <Link onClick={handlelogout} className="nav-link" aria-current="page" to="/login">
                Logout
              </Link>}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
