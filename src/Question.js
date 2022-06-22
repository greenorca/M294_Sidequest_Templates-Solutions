import React from "react"

import Button from './Button.js'


class Question extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      question: props.question,
      answers: props.answers,
      correct_answer: props.correct_answer,
      done: false,
      feedback: ""
    }
    // would be needed later on
    this.buttonClicked = this.buttonClicked.bind(this)
    this.makeButton = this.makeButton.bind(this)
  }

  buttonClicked(event){
    if (this.state.done === true) return;
    this.setState({
      done: true
    })
    let feedback = "Oh soo wrong"
    if (this.state.correct_answer === event.target.innerHTML){
      feedback ="Strike!"
    }
    this.setState({
      feedback: feedback
    })
  }

  makeButton(item){
    return (
      <Button
        label = { item }
        key = { item } //identifies each object
        onClick = { this.buttonClicked }
      />
    )
  }

  render() {
    const buttons = []
    /* foreach doesn't work here, 'this' would be unknown */
    for (const s in this.state.answers){
      buttons.push(
        this.makeButton(
          this.state.answers[s]
        )
      )
    }

    return (
      <div className="question">
          <h2>{ this.state.question }</h2>
          <img src="img/question_smiley.png" alt=""/>
          <hr/>
          <div className="button-bar">
            { buttons }
          </div>
          <div className="feedback">
            { this.state.feedback }
          </div>
      </div>
    )
  }
}

export default Question
