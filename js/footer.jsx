import React from "react";

export class Footer extends React.Component {
  showCopy = () => {
    let mySpan = document.querySelector(".visible");
    mySpan.classList.remove("visible");
  };

  render() {
    return (
      <footer>
        <div className="copyrights">
          <p>
            &copy; Copyrights
            <span onMouseEnter={this.showCopy} className="questionMark">
              ?
            </span>
            <br />
            <span className="visible">
              Images:&nbsp;
              <a
                href="http://www.stickpng.com/"
                target="_blank"
                title="stickpng"
              >
                Stickpng
              </a>
              <br />
              Sounds:&nbsp;
              <a
                href="https://www.zapsplat.com/"
                target="_blank"
                title="zapsplat"
              >
                ZapSplat
              </a>
              <br />
              Done by:&nbsp;
              <a href="mailto:pietrykajoanna@gmail.com" title="email me">
                Joanna Pietryka
              </a>
            </span>
          </p>
        </div>
      </footer>
    );
  }
}
