import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 3000);

const removeBodyClasses= ()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-primary')
}

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      //  setInterval(() => {
      //  document.title = 'TextUtils Installation going on'
      //  }, 2000);
      //  setInterval(() => {
      //  document.title = 'Hello world - TextUtils'
      //  }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "light";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar title="Lets go home!" aboutText="What's up" para=""/> */}
      {/* <Navbar /> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-2">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter your text to analyze"
                mode={mode}
              />
            </Route>
          </Switch> */}
          <Alert alert={alert} />
          <TextForm
          showAlert={showAlert}
          heading=" Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
          mode={mode}
           /> 
          <About mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
