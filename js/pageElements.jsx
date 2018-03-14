import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Wesołe nutki</h1>
        <p>Wybierz postacie, które zagrają dla Ciebie</p>
      </header>
    )
  }
}

export class Body extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          heroList: [
           {id: 1,
           url: "./img/cat.png",
           selected: false},
           {id: 2,
           url: "./img/troll1.png",
           selected: false},
           {id: 3,
           url: "./img/gitara.png",
           selected: false},
           {id: 4,
           url:  "./img/guy.png",
           selected: false},
           {id: 5,
           url:  "./img/pig.png",
           selected: false},
           {id: 6,
            url:  "./img/scr.png",
            selected: false},
           {id:7,
            url:  "./img/toy.png",
            selected: false},
            {id:8,
            url:  "./img/troll2.png",
            selected: false}
               ],
         selection: []
       }
       this.select = this.select.bind(this);
      }
      select = (hero) => {
                let index = this.state.selection.indexOf(hero.id);
                let newSelection = this.state.selection.slice();

                if ( index === -1 ) {
                    newSelection.push(hero.id);
                } else {
                    newSelection.splice( index, 1 );
                }
                this.setState({
                    selection: newSelection
                });


          //this.state.selection.push(this.state.heroList.id),

console.log(this.state.selection);
    }


componentDidMount(){
  $(function() {
   $('.container').find('.hero').on("click",function(){
    $(this).toggleClass("selected");
  });

});

}

  render() {
    let imgDivs = this.state.heroList.map(
      function show(hero){
        return (
          <div className="hero" onClick={this.select}
             key={hero.id}>
         <img src={hero.url} />
       </div>
     );
   }, this
);
    return (
      <div className="container">
        {imgDivs}
      </div>
    )
  }
}

export class Page extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Body/>
      </div>
    )
  }
}
