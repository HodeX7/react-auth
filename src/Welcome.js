import React from "react";
import GetName from "./GetName";
import "./Welcome.css";

function Welcome({ handleSignout, name}) {
  return (
    // if user.name is defined in db display normal code
    // else display getName component.
    <div className="welcome">
        <nav>
          <h2>Welcome, {name}.</h2>
          <button onClick={() => handleSignout()}>Log out</button>
        </nav>
    </div>
  );
}

export default Welcome;
