// Code DigitalClicker Component Here
import React from 'react';
export default class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  click = () => {
    this.setState((before) => ({
      timesClicked: before.timesClicked+1
    }))
  }

  render() {
    return (
      <button onClick={this.click}>{this.state.timesClicked}</button>
    )
  }


}
