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
          <h2>À quoi sert React ?</h2>
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
            React est une bibliothèque JavaScript utilisée pour créer des
            interfaces utilisateur dynamiques et interactives pour les
            applications web. Elle permet de diviser l'interface utilisateur en
            composants réutilisables, ce qui facilite la gestion de l'état et la
            maintenance du code.
          </p>
        </div>
      </div>
    </>
  );
}
