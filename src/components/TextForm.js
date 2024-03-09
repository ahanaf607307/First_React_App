import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case" , "success")
  };
  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case" , "success")
  };
  const handelClClick = () => {
    let newText = " ";
    setText(newText);
  };

  const handelOnChange = (event) => {
    // console.log(" onChange");
    setText(event.target.value);
  };

  // copy text
  const handelCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied" , "success")
  };

  // remove extra spaces
  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed" , "success")
  };

  const [text, setText] = useState(" ");
  // setText("newText") correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mt-3 mb-3">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="9"
            onChange={handelOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-success mx-1 my-2"
          onClick={handelUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          type="button"
          className="btn btn-success mx-1 my-2"
          onClick={handelLoClick}
        >
          Convert To LowerCase
        </button>
        <button
          type="button"
          className="btn btn-success mx-1 my-2"
          onClick={handelClClick}
        >
          Clear All
        </button>
        <button
          type="button"
          className="btn btn-success mx-1 my-2"
          onClick={handelCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-success mx-1 my-2"
          onClick={handelExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container mt-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>

        <h5>
          {text.split(" ").length} word's and {text.length} charecters
        </h5>
        <h6>{0.008 * text.split(" ").length} Minutes read</h6>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
