import React from "react";
import { Melody } from "./melody.jsx";
import { Notes } from "./notes.jsx";

export class Piano extends React.Component {
  sounds = {};
  render() {
    return (
      <div className="container longer">
        <Notes />
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
                <img className="pianoImg" src={hero.url} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
