import React from "react";
import SWbig from "../../img/SWbig.jpg";
import { Navbar } from "../component/navbar.js";

export const LearnMore = () => {
    return (
    <div className="container-fluid col-8 mt-5">
        <div className="d-flex justify-content-between mt-5">
          <div>
            <img src={SWbig} />
          </div>
          <div>
            <h1>Luke Skywalker</h1>
            <p>
              Cool Dude... Has some stuff done. No pacifist at all. But good
              guy!
            </p>
          </div>
        </div>
        <div>
          <hr className="text-danger" styles="heigth: 3px"></hr>
        </div>
        <div className="d-flex justify-content-between mx-5">
          <div className="text-danger text-center">Name<p>Char.name</p></div>
          <div className="text-danger text-center">Birth Year<p>Char.name</p></div>
          <div className="text-danger text-center">Gender<p>Char.name</p></div>
          <div className="text-danger text-center">Height<p>Char.name</p></div>
          <div className="text-danger text-center">Skin Color<p>Char.name</p></div>
          <div className="text-danger text-center">Eye Color<p>Char.name</p></div>
        </div>
    </div>
    )
}
