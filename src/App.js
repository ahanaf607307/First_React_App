// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BrowserRouter,Routes,  Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#04265a";
      showAlert("Dark mode has been enables", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enables", "success");
    }
  };

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar
        title="rHub"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3"> 
      {/* <Routes>  
      <Route exact path="/about" element={<About />} /> 
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text " mode={mode} />} />
        
      </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter The Text " mode={mode} />
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
