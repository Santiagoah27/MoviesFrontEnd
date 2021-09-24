import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-black">
<div className="container">
      <div className="container-fluid">
    <h3 className="navbar-brand">Movies App</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink exact to="/Movies" aria-current="page" className='nav-link active'>Movies</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/Favorites" className='nav-link'>Favorites</NavLink>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav>
  );
}

