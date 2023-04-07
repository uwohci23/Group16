import React from 'react';

class OldNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOld: true, isHovered: false};
    this.toggleOld = this.toggleOld.bind(this);
  }

  toggleOld() {
    this.setState(prevState => ({
      isOld: !prevState.isOld
    }));
  }

  render() {
    const { oldImageSrc, newImageSrc } = this.props;

    const buttonHoverStyle = {
      color: "#ffffff",
      background: "#000000",
    };

    const buttonStyle =
    {
      color: "#ffffff",
      background: "#222222",
    }

      return <div>
        <img src={this.state.isOld ? oldImageSrc : newImageSrc} width="auto" height="400px" style={{ border: '2px solid'}}></img>
        <button
          onClick={this.toggleOld}
          onMouseEnter={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
          style={this.state.isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}>{this.state.isOld? 'Old Version' : 'New Version'}
        </button>
      </div>
  }
}

export default OldNew;
