import React from 'react';
import OldNew from './OldNew';

class NavigationalMap extends React.Component {
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
          style={this.state.isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}>Navigational Map
        </button>
        {!this.state.isHidden && (
          <div style={{ textAlign: 'center' }}>
            <img src="static/images/NavigationMapText.PNG" style={{border: "2px solid", height: "400px", width:"auto"}}></img>
            <br></br>
            <img src="static/images/NavigationMap.png" style={{border: "2px solid", height: "auto", width:"800px"}}></img>
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

export default NavigationalMap;
