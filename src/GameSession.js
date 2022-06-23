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
        index: this.state.index+1,
        feedback: ""
      })
    }

    render(){
      console.log("Q-Index:" + this.state.index)
      let feedback = ""
      if (this.state.feedback !== ""){
        feedback = <div className="feedback">
          <h4>{ this.state.feedback }</h4>
          <button onClick={ this.nextQuestion }>Next</button>
        </div>
      }

      let q = ""
      if (this.state.index < this.state.questions.length){
        q = <Question
        key = { this.state.index } //extrem wichtig für refresh beim weiterschalten
        question = { this.state.questions[this.state.index].question }
        answers = { this.state.questions[this.state.index].answers }
        callback = { this.fetchAnswer }
      />} else {
        q = <div>
          <h1>Congrats, you made it!</h1>
          <h2>No more questions</h2>
        </div>
      }
      return (
        <div className="game-session">
          <div className="session-status">
            <span className="left">Question: { this.state.index+1 } / { this.state.questions.length }</span>
            <span className="right">Score: { this.state.score }</span>
          </div>
          { q }
          <div>
            { feedback }
          </div>
        </div>
      )
    }

}

export default GameSession
