import React from 'react';
import OldNew from './OldNew';

class Improvements extends React.Component {
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
          style={this.state.isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}>Improvements
        </button>
        {!this.state.isHidden && (
          <div style={{ textAlign: 'center' }}>
            {"Our system can improve in the flexibility/efficiency heuristic based on our heuristic evaluation. One way we can improve this area further is to implement a key bind system that will allow experienced users to quickly purchase and place their buildings into their city while allowing newer players to still click from the building inventory and place. Another area of improvement for our system is the visibility heuristic. Though considerable improvements have been made in this heuristic compared to the original, the next steps would be to dynamically update the tiles depending on the city's issues (i.e., If there is a fire, smoke will come from the building where the fire is, etc.)"}
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

export default Improvements;
