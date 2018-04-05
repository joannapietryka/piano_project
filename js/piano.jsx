import React from "react";
import { Melody } from "./melody.jsx";

export class Piano extends React.Component {
  addNote = () => {
    let notes = ["\u2669", "\u266A", "\u266B", "\u266C"];
    let random = Math.floor(Math.random() * notes.length);
    const staffLi = document.getElementById("staffLi");
    const newNote = document.createElement("LI");
    newNote.classList.add("animate");
    newNote.innerText = notes[random];
    staffLi.appendChild(newNote);
  };

  sounds = {};
  render() {
    return (
      <div className="container longer">
        <div className="staff">
          <ul id="staffLi" />
        </div>
        <Melody />
        {this.props.filtredList.map(hero => {
          return (
            <div>
              <audio
                key={hero.sound}
                ref={x => {
                  this.sounds[hero.id] = x;
                }}
              >
                <source src={hero.sound} preload="auto" />
              </audio>

              <div
                key={hero.id}
                className="keybordClass"
                onClick={() => this.sounds[hero.id].play()}
              >
                <img
                  className="pianoImg"
                  src={hero.url}
                  onClick={this.addNote}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
