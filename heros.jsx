import React from "react";

export class Heros extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          {this.props.heroList.map(hero => {
            return (
              <div
                className={hero.selected ? "hero selected" : "hero"}
                onClick={() => this.props.onSelect(hero.id)}
                key={hero.id}
              >
                <img src={hero.url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
