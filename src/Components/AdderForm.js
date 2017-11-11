/*global gapi*/
import React, {Component} from 'react';

class AdderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventSubject: "",
      startTime: "",
      endTime: ""
    };

    this.setEventSubject = this.setEventSubject.bind(this);
    this.setStartTime = this.setStartTime.bind(this);
    this.setEndTime = this.setEndTime.bind(this);
  }

  setEventSubject(event) {
    this.setState({eventSubject: event.target.value});
  }

  setStartTime(event) {
    this.setState({startTime: event.target.value});
  }

  setEndTime(event) {
    this.setState({endTime: event.target.value});
  }

  render() {
    return (<form>
      <input type="text" value={this.state.eventSubject} onChange={this.setEventSubject} id="subjectTxtBx" placeholder="Enter event name"/>
      <input type="text" value={this.state.startTime} onChange={this.setStartTime} id="startTime" placeholder="Enter start time of event"/>
      <input type="text" value={this.state.endTime} onChange={this.setEndTime} id="endTime" placeholder="Enter end time of event"/>
      <input type="button" id="submitEvent" value="Submit Event" />
    </form>);
  }
}

export default AdderForm;
