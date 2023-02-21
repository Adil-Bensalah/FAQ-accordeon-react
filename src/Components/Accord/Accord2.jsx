import React, { useState, useEffect, useRef } from "react";
import Chevron from "./Chevron.svg";
import "./Accord.css";

export default function Accord2() {
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
          <h2>Pourquoi utiliser ReactJS ? </h2>
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
            React est souvent utilisé pour créer des applications web complexes
            et interactives, car il permet de diviser l'interface utilisateur en
            composants réutilisables et de gérer leur état de manière efficace.
            
          </p>
        </div>
      </div>
    </>
  );
}
