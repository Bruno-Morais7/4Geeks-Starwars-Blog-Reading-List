import React from "react";
import DumImg from "../../img/DumImg.jpg";
import SWbig from "../../img/SWbig.jpg";
import "../../styles/home.css";
import List from "../component/list.js"
import Card from "../component/card.js"

export const Home = () => (
  <div className="container-fluid col-8 mt-5">
    <h2 className="text-danger">Characters</h2>
    <Card />
    <List />
    <h2 className="text-danger mt-5">Planets</h2>
    <Card />
    {/* <List /> */}
      {/* <div className="justify-content-start d-flex">
        <div className="card w-25">
          <img className="card-img-top" src={DumImg} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">planet.name</h5>
            <p className="card-text mb-1">planet.pop</p>
            <p className="card-text mb-1">planet.terrain</p>
            <div className="d-flex justify-content-between mt-3">
              <a href="#" className="btn btn-outline-primary">
                Learn More!
              </a>
              <button className="btn btn-outline-warning ml-auto align-self-center">
                <i className="fa-regular fa-heart text-warning"></i>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* When separating the pages, remember to add the container-fluid col-8 in the parent Div */}
      
        {/* <div className="d-flex justify-content-between mt-5">
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
        </div> */}

        </div>
      
    
 
);
