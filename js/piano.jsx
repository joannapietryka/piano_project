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
      <div className="container">
        <div className="staff">
          <ul id="staffLi" />
        </div>
        <Melody />
        {this.props.filtredList.map(hero => {
          return (
            <div key={hero.sound}>
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
                onClick={() => {
                  this.sounds[hero.id].pause();
                  this.sounds[hero.id].currentTime = 0;
                  this.sounds[hero.id].play();
                  this.addNote();
                }}
              >
                <img className="pianoImg" src={hero.url} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
