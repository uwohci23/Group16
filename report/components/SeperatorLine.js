import React from 'react';

class SeperatorLine extends React.Component {

  render() {
      return <hr 
      style={{
        background: this.props.color
      }}
      ></hr>
      

  }
}

export default SeperatorLine;
