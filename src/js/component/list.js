import { element } from "prop-types";
import DumImg from "../../img/DumImg.jpg";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

const List = () => {
  const {store, actions} = useContext(Context)
  const char = store.characters
  const { 0 : name } = char 
  console.log (name)
  
  
  // const {store, actions} = useContext(Context)
  // console.log(store.people)
  // const info = [
  //   {
  //     uid: "1",
  //     name: "Luke Skywalker",
  //     url: "https://www.swapi.tech/api/people/1",
  //   },
  //   { uid: "2", name: "C-3PO", url: "https://www.swapi.tech/api/people/2" },
  //   { uid: "3", name: "R2-D2", url: "https://www.swapi.tech/api/people/3" },
  //   {
  //     uid: "4",
  //     name: "Darth Vader",
  //     url: "https://www.swapi.tech/api/people/4",
  //   },
  //   {
  //     uid: "5",
  //     name: "Leia Organa",
  //     url: "https://www.swapi.tech/api/people/5",
  //   },
  //   { uid: "6", name: "Owen Lars", url: "https://www.swapi.tech/api/people/6" },
  //   {
  //     uid: "7",
  //     name: "Beru Whitesun lars",
  //     url: "https://www.swapi.tech/api/people/7",
  //   },
  //   { uid: "8", name: "R5-D4", url: "https://www.swapi.tech/api/people/8" },
  //   {
  //     uid: "9",
  //     name: "Biggs Darklighter",
  //     url: "https://www.swapi.tech/api/people/9",
  //   },
  //   {
  //     uid: "10",
  //     name: "Obi-Wan Kenobi",
  //     url: "https://www.swapi.tech/api/people/10",
  //   },
  // ];
  // const renderElements = info.map((char) => {
  //     return  <div className="d-flex">
  //     <div key={char.uid} className="mb-2 d-flex">
  //         <div className="card">
  //         <img className="card-img-top" src={DumImg} alt="Card image cap" />
  //         <div className="card-body">
  //           <h5 className="card-title">{char.name}</h5>
  //           <p className="card-text mb-1">char.gender</p>
  //           <p className="card-text mb-1">char.Hair-Color</p>
  //           <p className="card-text mb-1">char.Eye-Color</p>
  //           <div className="d-flex justify-content-between mt-3">
  //             <a href="#" className="btn btn-outline-primary">
  //               Learn More!
  //             </a>
  //             <button className="btn btn-outline-warning ml-auto align-self-center">
  //               <i className="fa-regular fa-heart text-warning"></i>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div> 
  //     </div>
  //   })
  return (<div>
  {/* {renderElements} */}
  <h5>Hello</h5>
  </div>)
};

export default List;
