import React from "react";

let notes = ["\u2669", "\u266A", "\u266B", "\u266C"];

let random = Math.floor(Math.random() * notes.length);

export class Notes extends React.Component {
  render() {
    return (
      <div className="staff">
        <ul>
          <li className="animate">{notes[random]}</li>
        </ul>
      </div>
    );
  }
}
