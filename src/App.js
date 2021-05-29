import react, { useState, useEffect } from "react";
import "./App.css";
import fire from "./firebase";
import GetName from "./GetName";
import Login from "./Login";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [first, setFirst] = useState(true)

  const clearErrors = () => {
    setEmailError("");
    setPassError("");
  };
  const clearInputs = () => {
    setEmail("");
    setPass("");
  };

  const handleSignup = () => {
    clearErrors();
    fire.auth()
      .createUserWithEmailAndPassword(email, pass)
      .catch((e) => {
        switch (e.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(e.message);
            break;
          case "auth/weak-password":
            setPassError(e.message);
            break;
        }
      });
  };
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .catch((e) => {
        switch (e.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(e.message);
            break;
          case "auth/wrong-password":
            setPassError(e.message);
            break;
        }
      });
  };

  const handleSignout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      }else{
        setUser('')
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      {user ?
      <GetName first={first} setFirst={setFirst} handleSignout={handleSignout}/>:
      <Login
        email={email}
        pass={pass}
        setEmail={setEmail}
        setPass={setPass}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passError={passError}
      />
      }
    </div>
  );
}

export default App;
