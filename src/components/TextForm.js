import React, { useState } from "react"; //rfc
//useState-----React Hook

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    console.log("Uppercase was clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    console.log("Uppercase was clicked", text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");


  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("Copy");
    let text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied!", "success");

  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces!", "success");

  };

  const [text, setText] = useState("");
  // text = "New Text";         //Wrong way to change the state
  // setText("New text");       //Correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "grey" : "black" }}
      >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" className="form-label">
            {" "}
            Text Here:-{" "}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "light",
              color: props.mode === "dark" ? "yellow" : "black",
            }}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="conatiner my-3"
        style={{ color: props.mode === "dark" ? "grey" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview here..."}
        </p>
      </div>
    </>
  );
}
