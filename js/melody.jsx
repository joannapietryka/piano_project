import React from "react";

function makeid() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export class Melody extends React.Component {
  constructor() {
    super();
    this.state = {
      sounds: [
        {
          uniqueId: makeid(),
          sound: "./sounds/beatbox.mp3",
          isActive: false,
          intervalId: null,
          intervalMillis: 1000
        },
        {
          uniqueId: makeid(),
          sound: "./sounds/crush.mp3",
          isActive: false,
          intervalId: null,
          intervalMillis: 1000
        },
        {
          uniqueId: makeid(),
          sound: "./sounds/hop.mp3",
          isActive: false,
          intervalId: null,
          intervalMillis: 1000
        }
      ]
    };
  }

  onChange(index, value) {
    let newSounds = [...this.state.sounds];
    newSounds[index].intervalMillis = value;

    this.setState({ sounds: newSounds });
    this.onClick(index, false);
  }

  onClick(index, changeStatus = true) {
    console.log(index);

    const newSounds = [...this.state.sounds];
    if (changeStatus) {
      newSounds[index].isActive = !this.state.sounds[index].isActive;
    }

    let playInterval = newSounds[index].intervalId;
    let audio = document.getElementById(newSounds[index].uniqueId);

    if (newSounds[index].isActive) {
      clearInterval(playInterval);
      audio.play();
      playInterval = setInterval(function() {
        audio.play();
      }, newSounds[index].intervalMillis);
      newSounds[index].intervalId = playInterval;
    } else {
      audio.pause();
      clearInterval(playInterval);
      newSounds[index].intervalId = null;
      audio.currentTime = 0;
    }
    this.setState({ sounds: newSounds });
  }

  render() {
    return (
      <div>
        {this.state.sounds.map((sound, index) => (
          <div key={index} className={"melodyBox" + " " + "beats_" + index}>
            <select onChange={e => this.onChange(index, e.target.value)}>
              <option value="1000">1</option>
              <option value="2000">2</option>
              <option value="3000">3</option>
              <option value="4000">4</option>
            </select>
            <button key={index} onClick={() => this.onClick(index)}>
              {sound.isActive ? "OFF" : "ON"}
            </button>
            <audio id={sound.uniqueId} src={sound.sound} preload="auto" />
          </div>
        ))}
      </div>
    );
  }
}
