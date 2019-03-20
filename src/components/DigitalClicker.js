// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {

  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  render() {
    return {
      <button onClick={this.updateClicker}>{this.state.timesClicked}</button>
    }
  }
}
