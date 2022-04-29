import React from "react";
import DumImg from "../../img/DumImg.jpg";
import "../../styles/home.css";

export const Home = () => (
  <div className="container-fluid col-8 mt-5">
    <h2 className="text-danger">Characters</h2>
	
	<div>
    <div className="justify-content-start d-flex styles="data-spy="scroll">
      
	  <div className="card w-25">
        <img className="card-img-top" src={DumImg} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">character.name</h5>
          <p className="card-text mb-1">char.gender</p>
          <p className="card-text mb-1">char.Hair-Color</p>
          <p className="card-text mb-1">char.Eye-Color</p>
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

	  <div className="card w-25">
        <img className="card-img-top" src={DumImg} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">character.name</h5>
          <p className="card-text mb-1">char.gender</p>
          <p className="card-text mb-1">char.Hair-Color</p>
          <p className="card-text mb-1">char.Eye-Color</p>
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-outline-primary">
              Learn More!
            </a>
            <button className="btn btn-outline-warning ml-auto align-self-center">
              <i className="fa-regular fa-heart text-warning"></i>
            </button>
          </div>
        </div>
      </div>

	  <div className="card w-25">
        <img className="card-img-top" src={DumImg} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">character.name</h5>
          <p className="card-text mb-1">char.gender</p>
          <p className="card-text mb-1">char.Hair-Color</p>
          <p className="card-text mb-1">char.Eye-Color</p>
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-outline-primary">
              Learn More!
            </a>
            <button className="btn btn-outline-warning ml-auto align-self-center">
              <i className="fa-regular fa-heart text-warning"></i>
            </button>
          </div>
        </div>
      </div>

	  <div className="card w-25">
        <img className="card-img-top" src={DumImg} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">character.name</h5>
          <p className="card-text mb-1">char.gender</p>
          <p className="card-text mb-1">char.Hair-Color</p>
          <p className="card-text mb-1">char.Eye-Color</p>
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-outline-primary">
              Learn More!
            </a>
            <button className="btn btn-outline-warning ml-auto align-self-center">
              <i className="fa-regular fa-heart text-warning"></i>
            </button>
          </div>
        </div>
      </div>

	  <div className="card w-25">
        <img className="card-img-top" src={DumImg} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">character.name</h5>
          <p className="card-text mb-1">char.gender</p>
          <p className="card-text mb-1">char.Hair-Color</p>
          <p className="card-text mb-1">char.Eye-Color</p>
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-outline-primary">
              Learn More!
            </a>
            <button className="btn btn-outline-warning ml-auto align-self-center">
              <i className="fa-regular fa-heart text-warning"></i>
            </button>
          </div>
        </div>
      </div>

	  <div className="card w-25">
        <img className="card-img-top" src={DumImg} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">character.name</h5>
          <p className="card-text mb-1">char.gender</p>
          <p className="card-text mb-1">char.Hair-Color</p>
          <p className="card-text mb-1">char.Eye-Color</p>
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-outline-primary">
              Learn More!
            </a>
            <button className="btn btn-outline-warning ml-auto align-self-center">
              <i className="fa-regular fa-heart text-warning"></i>
            </button>
          </div>
        </div>
      </div>

	  <div className="card w-25">
        <img className="card-img-top" src={DumImg} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">character.name</h5>
          <p className="card-text mb-1">char.gender</p>
          <p className="card-text mb-1">char.Hair-Color</p>
          <p className="card-text mb-1">char.Eye-Color</p>
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-outline-primary">
              Learn More!
            </a>
            <button className="btn btn-outline-warning ml-auto align-self-center">
              <i className="fa-regular fa-heart text-warning"></i>
            </button>
          </div>
        </div>
      </div>
	  </div>

	  <h2 className="text-danger mt-5">Planets</h2>

    <div className="justify-content-start d-flex styles="data-spy="scroll"></div>
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

    </div>
  </div>
 
);
