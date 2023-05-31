import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={'/add'} className="nav-link">Add Post</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;