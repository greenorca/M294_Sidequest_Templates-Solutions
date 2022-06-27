import React from "react"
import './GameSession.css';
import Question from "./Question.js"

/**
* handles a set of Questions
*/
class GameSession extends React.Component{

    constructor(props){
      super(props)
      this.state = {

      }
    }

    render(){
      return (
        <div className="game-session">
          <div className="session-status">
            <span className="left">Question: <i>TODO: fix me</i> </span>
            <span className="right">Score: <i>TODO: fix me</i></span>
          </div>
            { /* aktuelle Question-JSX */ }
          <div>
            { /* feedback */ }
          </div>
        </div>
      )
    }

}

export default GameSession
