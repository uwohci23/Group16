import React from 'react';

class MainMenu extends React.Component {

  render() {

    if (this.props.MainMenu) {
      return <div>
        <img src="static\images\MainMenuOld.PNG" width="auto" height="400px"></img>
      </div>
    }
    else {
      return <div>
        <img src="static\images\MainMenuNew.PNG" width="auto" height="400px"></img>
      </div>
    }

  }
}

export default MainMenu;
