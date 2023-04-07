import React from 'react';
import OldNew from './OldNew';

class Heuristic extends React.Component {
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
          style={this.state.isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}>Heuristic Evaluation
        </button>
        {!this.state.isHidden && (
          <div style={{ textAlign: 'center' }}>

            {/* Visibility of System Status */}
              <b>Visibility of System Status</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system shows visibility to the users through the alert system, the building purchasing system, and the demand bar graph system. In the alerts, the system will let the user know its state (too much pollution, too much traffic, etc.). These alerts will inform the user that they need to address the issue. The demand bar graph is similar to this concept as well as it informs the user what the demand for each building is so they can purchase it. For the building purchasing component, when the users select a building, that purchase option will be bolded, notifying the user that the system."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Match between the System and the Real World */}
              <b>Match between the System and the Real World</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system conveys information to the user by speaking the user’s language. This can be seen through the system alerts that notify the user of issues in the city. Furthermore, based on our system’s design, users can use their mental models / previous knowledge to determine that the “inventory toolbar” is usually seen at the bottom of most interfaces. From this, it can be inferred that the objects in this toolbar can be placed on the screen."
            }
            <hr style={{background: "grey"}}></hr>

            {/* User Control and Freedom */}
              <b>User Control and Freedom</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our redesign of the system gave the users more control and freedom. In the original version of the system, users had no way of knowing how to leave the game state when they performed something they did not mean to. Our system now contains clear and visible exit buttons for the user. These buttons are located in the game interface and the new game interface, where both take the user back to the main menu once clicked, giving the users an easy escape."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Consistency and Standards */}
              <b>Consistency and Standards</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system meets this heuristic as we ensured that our interface had internal consistency, where the design language was consistent throughout the system. By moving components around, our redesign also satisfies external consistency, as our system now contains the same layout as other popular simulation game systems. This layout includes having the inventory placed at the bottom, having the run/pause/change simulation settings on the side of the screen, and having a graphic that contains information about the current simulation."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Error Prevention */}
              <b>Error Prevention</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system satisfies this heuristic as the system contains features that will prevent errors. One error prevention feature is that the system only allows the user to start a new game if all of the required fields are filled out. A message box also appears, telling the user what field they are missing. The system also prevents user error by graying out the buildings the user cannot afford. Furthermore, the system also displays a message to the users saying that the selected building cannot be purchased if the user tries to place the building on the map."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Recognition vs Recall in User Interfaces */}
              <b>Recognition vs Recall in User Interfaces</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our redesign of the system satisfies this heuristic through the implementation of our game alerts. When an issue is happening in the game, the system will send an alert that contains cues to help the user resolve the issue that is occurring. In the original version of the game, some of these alerts were unclear as to how to resolve them. This led to users getting stuck as they did not know how to resolve the issue. By implementing these cues, the users will recognize what they need to do to resolve the alert."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Flexibility and Efficiency of Use */}
              <b>Flexibility and Efficiency of Use</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system redesign satisfies this heuristic through one of the significant additions we added, the tutorial mode. The tutorial mode is an optional mode that new system users can opt into and understand how the system/game works when creating a new game. Whereas experienced players can skip the tutorial mode as they are already familiar with the game/system. Overall, this improves the system's learnability as users now have an in-system method of learning how the system works. In contrast, before, users had to rely on external documentation to understand the system's functionality."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Aesthetic and Minimalist Design */}
              <b>Aesthetic and Minimalist Design</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system redesign is designed with this heuristic in mind. Since simulation games have many scenarios that the user can dabble with, the system has been designed so that only the relevant information is always shown to the user. Mainly, this information is the demand graph for various buildings and the overall city metrics. We have added another component that shows the significant problems the population is facing in the city and to see their happiness with the changes being made in the city. This supports the user's primary goals as they know the adjustments they need to make to ensure that the city is successful."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Help users recognize, diagnose, and recover from errors */}
              <b>Help users recognize, diagnose, and recover from errors</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system redesign massively improved this heuristic in contrast to the original. In the original, users had no way of correcting their errors or what caused the error when they encountered it. In our system redesign, we tell the users where they are going wrong when an error appears through a pop-up message. Furthermore, to address users' inability to recover from errors, we have implemented an undo functionality. These design choices will help the user recognize, diagnose and recover from errors."
            }
            <hr style={{background: "grey"}}></hr>

            {/* Help and documentation */}
              <b>Help and documentation</b>
              <br></br>
            {
              /*This is where content goes*/
              "Our system redesign drastically improved this heuristic compared to the original, as we have implemented a tutorial screen with GIFS showing how the system works. This gives the users a semi-live method of learning how the system works as they can see the intended way to use the system and its different functionalities through the GIF. Furthermore, the tutorial can be accessed anytime if they need documentation on the system’s functionalities."
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

export default Heuristic;
