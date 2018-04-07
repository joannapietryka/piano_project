import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header.jsx";
import { Heros } from "./heros.jsx";
import { Piano } from "./piano.jsx";
import { Footer } from "./footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroList: [
        {
          id: 1,
          url: "./img/cat.png",
          selected: false,
          sound: "./sounds/cat.mp3"
        },
        {
          id: 2,
          url: "./img/chick.png",
          selected: false,
          sound: "./sounds/bug.mp3"
        },
        {
          id: 3,
          url: "./img/gitara.png",
          selected: false,
          sound: "./sounds/kop.mp3"
        },
        {
          id: 4,
          url: "./img/guy.png",
          selected: false,
          sound: "./sounds/pig.mp3"
        },
        {
          id: 5,
          url: "./img/pig.png",
          selected: false,
          sound: "./sounds/lala.mp3"
        },
        {
          id: 6,
          url: "./img/scr.png",
          selected: false,
          sound: "./sounds/tra.mp3"
        },
        {
          id: 7,
          url: "./img/toy.png",
          selected: false,
          sound: "./sounds/src.mp3"
        },
        {
          id: 8,
          url: "./img/troll2.png",
          selected: false,
          sound: "./sounds/troll.mp3"
        }
      ]
    };
  }
  select = id => {
    const newState = [...this.state.heroList];
    const index = newState.findIndex(item => item.id === id);
    newState[index].selected = !newState[index].selected;
    this.setState({
      heroList: newState
    });
  };

  render() {
    const filtred = this.state.heroList.filter(item => item.selected);
    return (
      <div>
        <Header filtredList={filtred} />
        {filtred.length < 4 ? (
          <Heros onSelect={this.select} heroList={this.state.heroList} />
        ) : (
          <Piano filtredList={filtred} />
        )}
        <Footer />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});
