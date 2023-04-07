import React from 'react';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true, isHovered: false };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden
    }));
  }

  render() {

    const buttonHoverStyle = {
      color: "#ffffff",
      background: "#000000",
      fontSize: "50px",
      height: "60px",
      width: "100%",
    };

    const buttonStyle =
    {
      color: "#ffffff",
      background: "#222222",
      fontSize: "50px",
      height: "60px",
      width: "100%",
    }

    return (
      <div>
        <button
          onClick={this.toggleHidden}
          onMouseEnter={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
          style={this.state.isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}>Executive Summary
        </button>
        {!this.state.isHidden && (
          <div style={{ textAlign: 'center' }}>
            {
              /*This is where content goes*/
              "MicropolisJS is a HTML5/Javascript port of the open source city-building game called Micropolis. The objective of the game is to maintain and manage your city in order to sustain its growth. Due to the age of Micropolis, there are several violations of design principles including information overload, adding friction to user interaction, and overall confusing layout of the system. By applying several good design principles, the redesign of MicropolisJS included several modifications and implementations of new systems to improve the heuristics of the design."
            }
          </div>
        )}
        <hr
          style={{
            background: "black"
          }}
        ></hr>
      </div>

    );
  }
}

export default Summary;
