import React from "react";
import "./Note.css";

function Note({ text }) {
  return (
    <div className="note">
      <p>{text}</p>
    </div>
  );
}

export default Note;

