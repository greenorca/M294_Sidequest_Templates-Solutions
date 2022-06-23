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
        score: 0,
        index: 0,
        questions: props.questions,
        feedback: ""
      }
      this.fetchAnswer = this.fetchAnswer.bind(this)
      this.nextQuestion =this.nextQuestion.bind(this)
    }

    fetchAnswer(answer){
      const currentCorrectAnswer = this.state.questions[this.state.index].correct_answer
      let feedback = "Oh soo wrong"
      let points = 0;
      if (currentCorrectAnswer === answer){
        feedback ="Strike!"
        points = 100
      }
      this.setState({
        feedback: feedback,
        score: this.state.score + points
      })

    }

    nextQuestion(){
      this.setState({
        index: Math.min(this.state.questions.length, this.state.index+1),
        feedback: ""
      })
    }

    render(){
      console.log("Q-Index:" + this.state.index)
      let feedback = ""
      if (this.state.feedback !== ""){
        feedback = <div className="feedback">
          <h2>{ this.state.feedback }</h2>
          <button onClick={ this.nextQuestion }>Next</button>
        </div>
      }

      return (
        <div className="game-session">
          <div className="session-status">
            <span className="left">Question: { this.state.index+1 } / { this.state.questions.length }</span>
            <span className="right">Score: { this.state.score }</span>
          </div>
          <Question
            key = { this.state.index } //extrem wichtig für refresh beim weiterschalten
            question = { this.state.questions[this.state.index].question }
            answers = { this.state.questions[this.state.index].answers }
            callback = { this.fetchAnswer }
          />
          <div>
            { feedback }
          </div>
        </div>
      )
    }

}

export default GameSession
