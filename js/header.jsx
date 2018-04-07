import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Wesołe nutki</h1>
        {this.props.filtredList.length < 4 ? (
          <div className="toDo">
            <p>Wybierz 4 postacie, które zagrają dla Ciebie</p>
          </div>
        ) : (
          <div className="toDo">
            <p>🎶 Graj melodie 🎶</p>
          </div>
        )}
      </header>
    );
  }
}
