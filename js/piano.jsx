import React from 'react';
import ReactDOM from 'react-dom';


export class Piano extends React.Component{
  constructor(props){
      super(props);
    }
  render(){
  //  if (this.props.selection.length == 3){
    return(
      <div className="container">
        <div className="keybordClass"> </div>
        <div className="keybordClass"> </div>
        <div className="keybordClass"> </div>
        <div className="keybordClass"> </div>
      </div>
      )
    // } else {
    //   return null;
    // }
  }
}
export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="copyrights">
          <p>Copyright</p>
        </div>
      </footer>
  )
  }
}

export class PianoFull extends React.Component{
  render(){
      return(
        <div>
          <Piano selection={this.props.selection}/>
          <Footer/>
        </div>
      )
  }
}
