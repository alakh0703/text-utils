import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value); /* IMP */
  };

  const handleUpClick1 = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleUpClick2 = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleUpClick3 = (event) => {
    let newText = "";
    setText(newText);
  };
  const handleUpClick4 = (event) => {
    var copyText = document.getElementById("mytext");
    copyText.select();
    copyText.setSelectionRange(0, text.length);
    navigator.clipboard.writeText(copyText.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] =
    useState(
      ""
    ); /* it is based on React hooks. It is based on Syntax "const [count, setCount] = useState(0)"   . just mug up the syntax*/

  return (
    <>
      <div className="container" id="alakh">
        <div className="container">
          <h2>Enter your Text to ANALYSE:</h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              id="mytext"
              rows="8"
              onChange={handleOnChange}
              
            ></textarea>
          </div>

          <button className="btn btn-primary x" onClick={handleUpClick1}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary x" onClick={handleUpClick2}>
            Convert to Lowercase
          </button>

          <button className="btn btn-primary x" onClick={handleUpClick4}>
            Copy to Clipboard
          </button>
          <button className="btn btn-primary x" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary x" onClick={handleUpClick3}>
            Clear
          </button>
        </div>

        <div className="container container2 my-3">
          <h1>Your Text Summary:</h1>
          <p className="mx-1">
            {text.split(" ").length - 1} words and {text.length} characters
          </p>
          <p className="mx-1">{0.008 * text.split(" ").length} Minute Read</p>

          <h3>PREVIEW</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

/* You won't be able to write in textbox without listening onChange event */
