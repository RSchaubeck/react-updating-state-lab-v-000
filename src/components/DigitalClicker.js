// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  updateClicker = () => {
    this.setState({
      timesClicked: timesClicked += 1
    })
  }

  render() {
    return(
      <button label={this.state.timesClicked} onClick={this.updateClicker}></button>
    )
  }
}

export default DigitalClicker;
