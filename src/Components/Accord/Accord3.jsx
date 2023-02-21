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
          <h2>Quand utiliser React ?</h2>
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
            qui nécessitent une interface utilisateur interactive et réactive.
            Il est également utile pour les projets qui doivent être maintenus à
            long terme.
          </p>
        </div>
      </div>
    </>
  );
}
