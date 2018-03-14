import React from 'react';
import ReactDOM from 'react-dom';
import {Page} from "./pageElements.jsx";
import {PianoFull} from "./piano.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Page/>
        <PianoFull/>
      </div>
      )
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
