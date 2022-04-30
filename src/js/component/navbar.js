import React from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/brandSW.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container-fluid col-8">
        <Link to="/">
          <span className="navbar-brand">
            <img src={starWars} width="125px"></img>
          </span>
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Favorites 
			<span class="badge badge-primary badge-pill bg-secondary">{"counterFavorites"}</span>
          </button>
          {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div> */}
        </div>
        {/* <Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link> */}
      </div>
    </nav>
  );
};
