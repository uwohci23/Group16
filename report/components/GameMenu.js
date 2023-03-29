import React from 'react';

class GameMenu extends React.Component {

  render() {

    if (this.props.GameMenu) {
      return <div>
        <img src="static\images\GameMenuOld.PNG" width="auto" height="400px"></img>
      </div>
    }
    else {
      return <div>
        <img src="static\images\GameMenuNew.PNG" width="auto" height="400px"></img>
      </div>
    }

  }
}

export default GameMenu;
