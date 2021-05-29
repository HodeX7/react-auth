import React, { useState } from "react";
import "./GetName.css";
import firebase from "./firebase";
import Welcome from "./Welcome";

function GetName({ first, setFirst, handleSignout }) {
    const [name, setName] = useState("");
    const addUser = (e) => {
      const db = firebase.firestore();
      db.settings({
        timestampInSnaphots: true,
      });
      const userRef = db.collection("user").add({
        name: name,
      });
      setFirst(false);
    };
  return (
    <div className="getName">
      {first ? (
          <>
          <label>Enter your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => addUser()}>SUBMIT</button>
        </>
      ) : (
        <Welcome handleSignout={handleSignout} name = {name} />
      )}
    </div>
  );
}

//<Welcome handleSignout={handleSignout} first={first} setFirst={setFirst} />
export default GetName;
