// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode has been Enabled!", "success");

      document.body.style.backgroundColor = "#404264";

      const textarea = document.querySelector("#mytext");
      textarea.style.backgroundColor = "#242552";
      textarea.style.color = "white";

      const something = document.querySelector("#alakh");
      something.style.color = "white";
    } else {
      setMode("light");
      showAlert("Dark Mode has been Disabled!", "success");

      document.body.style.backgroundColor = "white";
      const textarea = document.querySelector("#mytext");
      textarea.style.backgroundColor = "white";
      textarea.style.color = "black";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm />

        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
