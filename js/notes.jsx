import React from "react";

let notes = [
  "&#9833;",
  "&#266B;",
  "&#9834;",
  "&#9835;",
  "&#9836;",
  "&#2669;",
  "&#266A;"
];

let random = Math.floor(Math.random() * notes.length);

export class Notes extends React.Component {
  render() {
    return (
      <div className="staff">
        <ul>
          <li>{notes[random]}</li>
        </ul>
      </div>
    );
  }
}
