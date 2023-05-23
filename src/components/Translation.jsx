import React from "react";

export default function Translation({ setInput, doStuff, output }) {
  return (
    <div>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        className="playground"
        id=""
        cols="55"
        rows="10"
      ></textarea>
      {output.length && (
        <div className="output">
          <p>{output}</p>
        </div>
      )}
      <button onClick={doStuff} className="action-btn">
        Submit
      </button>
    </div>
  );
}
