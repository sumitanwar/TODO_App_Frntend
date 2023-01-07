import React, { useState } from "react";
import "./Header.css";
function Header({ props }) {
  //   let user = "Sumit";

  return (
    <>
      <div className="header_container">
        <h1>To-Do Item Table</h1>
        {props ? (
          <p className={"userName_container"}>
            Hello <br /> {props}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Header;
