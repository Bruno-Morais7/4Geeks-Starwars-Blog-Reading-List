import React from "react";
import DumImg from "../../img/DumImg.jpg";
import { Link } from "react-router-dom";

const Card = () => (
  <div className="d-flex gap-3">
    <div className="card">
      <img className="card-img-top" src={DumImg} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">character.name</h5>
        <p className="card-text mb-1">char.gender</p>
        <p className="card-text mb-1">char.Hair-Color</p>
        <p className="card-text mb-1">char.Eye-Color</p>
        <div className="d-flex justify-content-between mt-3">
          <Link to="/learnMore">
            <button className="btn btn-outline-primary">Learn More!</button>
          </Link>
          <button className="btn btn-outline-warning ml-auto align-self-center">
            <i className="fas fa-heart text-warning"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
