import React from "react"


class Question extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      question: props.question
    }
  }

  render() {
    return (
      <div className="question">
            <h2>{ this.state.question }</h2>
          <img src="img/question_smiley.png" alt=""/>
      </div>
    )
  }

}

export default Question
