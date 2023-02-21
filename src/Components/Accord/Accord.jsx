import React, { useState, useEffect, useRef } from "react";
import Chevron from "./Chevron.svg";
import "./Accord.css";

export default function Accord() {
  const [toggle, setToggle] = useState(false);
  const [elHight, setElHight] = useState();

  const reff = useRef();

  useEffect(() => {
    setElHight(`${reff.current.scrollHeight}px`);
  }, []);

  const handelToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div onClick={handelToggle} className="accord">
        <div className="accord-visible">
          <h2>Qu'est-ce que ReactJS?</h2>
          <img
            src={Chevron}
            alt=""
            className={toggle ? "image-transform" : "image"}
          />
        </div>
        <div
          ref={reff}
          className={toggle ? "accord-toggle animated" : "accord-toggle"}
          style={{ height: toggle ? `${elHight}` : "0px" }}
        >
          <p>
            React JS est une bibliothèque JavaScript open source développée par
            Facebook. Elle permet de créer des interfaces utilisateur dynamiques
            pour les applications web en utilisant une approche déclarative et
            basée sur les composants. 
          </p>
        </div>
      </div>
    </>
  );
}
