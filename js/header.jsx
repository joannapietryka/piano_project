import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Wesołe nutki</h1>
        {this.props.filtredList.length < 4 ? (
          <p>Wybierz postacie, które zagrają dla Ciebie</p>
        ) : (
          <p>Graj melodie</p>
        )}
      </header>
    );
  }
}
