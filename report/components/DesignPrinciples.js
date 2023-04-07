import React from 'react';
import OldNew from './OldNew';

class DesignPrinciples extends React.Component {
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
          style={this.state.isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}>Design Principles
        </button>
        {!this.state.isHidden && (
          <div style={{ textAlign: 'center' }}>
            
            {/* Progressive Disclosure */}
            <b>Progressive Disclosure</b>
            <br></br>
            {
              /*This is where content goes*/
              "The system shows progressive disclosure in the main menu, where the “generate another” button would often confuse the users – using this principle, we put the “generate another” button in another menu, the new game menu, to hide this button in another screen to avoid confusing the user."
            }
            <OldNew
              oldImageSrc="static/images/LearnabilityOld.PNG"
              newImageSrc="static/images/ProgressiveNew.PNG" />
            <hr style={{background: "grey"}}></hr>

            {/* Visibility */}
              <b>Visibility</b>
              <br></br>
            {
              /*This is where content goes*/
              "The system clearly displays what can be done for the given task of creating a city. This is accomplished by having the building inventory, demand graph, and city metrics always shown on the screen. When the user decides to go into the disasters menu or budget menu, those components are then visible on the screen, and are removed when the user goes back to the city screen."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Feedback */}
              <b>Feedback</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system shows feedback when the users place one of the buildings from their inventory onto the map. Once placed, the map tiles of where the object was placed are re-rendered, showing the placed building on the map. Furthermore, depending on the building that was placed, the demand graph will update to reflect the new state of the city. This is also seen when the users are trying to place buildings they cannot afford, they get an error message saying insufficient funds."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Constraints */}
            <b>Constraints</b>
            <br></br>
            {
              /*This is where content goes*/
              "The system implemented constraints so that the user cannot perform certain actions unless all the predetermined conditions are satisfied. This is mainly implemented in the new game menu, where the user cannot create a new game unless they fill out the name of the city, and the difficulty option. This is also seen in the building inventory toolbar where the buildings gray out when they are no longer affordable, thus constraining the user from purchasing something they cannot afford."
            }
            <OldNew
              oldImageSrc="static/images/ConstraintsOld.PNG"
              newImageSrc="static/images/ConstraintsNew.PNG" />
            <hr style={{background: "grey"}}></hr>

            {/* Affordance */}
              <b>Affordance</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system contains affordances that are correctly perceived (static affordances). For example, there are buttons that are correctly perceived as when they are pressed something happens in our system. Furthermore, our system also has affordance in our layout. With the building inventory at the bottom, it gives the affordance that users would drag items from their inventory to place on the map."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Causality */}
              <b>Causality</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system’s main mechanic is designed around this principle. When the users start to place buildings on the map, depending on the building, the demand graph will update. For example, if the user placed 5 residential buildings on the map, the demand for residential buildings will go down."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Working Memory */}
            <b>Working Memory</b>
            <br></br>
            {
              /*This is where content goes*/
              "The system contains a bar graph that shows the demand for buildings that are needed in the city. This bar graph updates as the game goes on, assisting the user as to when they need to add more industrial, residential, or commercial buildings to their city. By converting this graph into a more understandable and intuitive element, users are not required to memorize the status of their city."
            }
            <OldNew
              oldImageSrc="static/images/WorkingMemoryOld.PNG"
              newImageSrc="static/images/WorkingMemoryNew.PNG" />
            <hr style={{background: "grey"}}></hr>

            {/* Consistency */}
              <b>Consistency</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system matches both internal and external consistency. The same language/aesthetic is used throughout the system and its various menus. Furthermore, components were moved around to ensure that our system is consistent with other simulation games (having the inventory at the bottom, the play/pause/city settings on the side, the metrics of the world on the side etc.)"
            }
            <hr style={{background: "grey"}}></hr>

            {/* Error Prevention */}
              <b>Error Prevention</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system gives the users options for some of their inputs so that no unnecessary input is taken. This can be seen in the budgeting menu. In order to prevent negative budget values, the respective data can only be modified with sliding bar inputs, ensuring that garbage values are not able to be input in the system."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Positive Transfer */}
              <b>Positive Transfer</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system redesign is designed in a way that matches the designs of other city building simulation games. Users can use their previous knowledge of the other simulation game systems and apply it to our system, which increases the usability of our system."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Metaphors */}
              <b>Metaphors</b>
              <br></br>
            {
              /*This is where content goes*/
              "There are two uses of metaphors for interaction in our system, being Manipulating and Navigating. The user can manipulate the world and the city built within by using the cursor. The user is able to interact with this space by placing down and removing buildings. The user can navigate this space by using the arrow keys or WASD keys to move the camera around, thus allowing them to ‘fly’ through this representational space."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Semiotics */}
            <b>Semiotics</b>
            <br></br>
            {
              /*This is where content goes*/
              "Our system has iconic symbols that represent the various building objects in the building inventory. We have implemented these symbols so that the users can easily recognize what each building is more efficiently. This implementation increases the overall usability of the system and allows the users to complete their tasks more efficiently."
            }
            <OldNew
              oldImageSrc="static/images/SemioticsOld.PNG"
              newImageSrc="static/images/SemioticsNew.PNG" />
            <hr style={{background: "grey"}}></hr>

            {/* Feedback */}
              <b>Feedback</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system shows feedback when the users place one of the buildings from their inventory onto the map. Once placed, the map tiles of where the object was placed are re-rendered, showing the placed building on the map. Furthermore, depending on the building that was placed, the demand graph will update to reflect the new state of the city. This is also seen when the users are trying to place buildings they cannot afford, they get an error message saying insufficient funds."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Repetition */}
              <b>Repetition</b>
              <br></br>
            {
              /*This is where content goes*/
              "While redesigning the system, we were careful to not try to “reinvent the wheel”. While many subsystems needed reworking to implement our changes, other subsystems were very robust and well developed. Specifically, we were able to reuse the design elements that created certain UI components to implement the evaluation header, located at the top of the screen. Using this strategy gave us a consistent result across various UI elements, and ensured the codebase remained consistent as well."
            }
            <hr style={{background: "grey"}}></hr>

            {/* User Experience */}
            <b>User Experience</b>
            <br></br>
            {
              /*This is where content goes*/
              "One of our first realizations when experimenting with the original system was the absence of an undo button. Particularly in a city building simulator, the lack of this function creates a very frustrating emotional user experience. One mistakenly placed building has irreversible effects. Despite a “bulldoze” option being available to remove placed buildings, the user does not retain their money spent, and the state of the city is distinct from before the placement. We wanted to give the user an option to completely undo a building placement, that would also undo the side effects of a building placement as well. This was one of the most rewarding changes we implemented in terms of the user experience, and created a game that was much friendlier to user mistakes."
            }
            <OldNew
              oldImageSrc="static/images/ConstraintsOld.PNG"
              newImageSrc="static/images/UserExperienceNew.PNG"/>
            <hr style={{background: "grey"}}></hr>

            
            {/* Representation */}
              <b>Representation</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system has experiential representation through the use of the demand bar graph and visual symbols. These representations are easily perceived and interpreted by the user (demand graph shows what building is needed in the city, and the semiotics decrease the cognitive load for the user). The representation is also appropriate for the task of placing buildings on the map and checking to see what buildings need to be placed."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Proximity */}
              <b>Proximity</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system reworks the UI to account for better proximity of UI elements. In the original version, we felt the location of the building tools menu was in an odd location, and left room for improvement. Among other changes to this menu, we moved it to the bottom and spanned it across the width of the game screen. We feel this is a more intuitive location, as this style is common across many games in the same city building sub genre, and overall applies a better proximity of the various UI elements on the screen."
            }
            <OldNew
              oldImageSrc="static/images/ProximityOld.PNG"
              newImageSrc="static/images/ProximityNew.PNG" />
            <hr style={{background: "grey"}}></hr>

            {/* Learnability */}
              <b>Learnability</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system implements several features that help improve the learnability. The user is able to choose whether or not to display a tutorial screen when they first start a game. This tutorial includes the basics on how to play the game and helps the player remember certain actions that will need to be performed during gameplay."
            }
            <OldNew
              oldImageSrc="static/images/LearnabilityOld.PNG"
              newImageSrc="static/images/LearnabilityNew.PNG" />
            <hr style={{background: "grey"}}></hr>

            {/* Flexibility */}
              <b>Flexibility</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system is flexible in the sense that we are accommodating both new users and experienced users. This can be seen through the option of choosing to see the tutorial or not. Furthermore, the system further offers flexibility in the sense that users can choose to speed up the game for convenience."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Minimize Cognitive Load */}
            <b>Minimize Cognitive Load</b>
              <br></br>
            {
              /*This is where content goes*/
              "Design should minimize the amount of cognitive effort required to use it. In the original design of our system, the user is faced with more extraneous cognitive load in terms of tool usage. With the addition of icons for each tool, and having all the tools in one line across the bottom, the user is able to instantly find the tool they need and use it."
            }
            <hr style={{background: "grey"}}></hr>

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

export default DesignPrinciples;
