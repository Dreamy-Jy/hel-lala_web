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
    this.sendEvent = this.sendEvent.bind(this);
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

  /* TODO: make a way to parase the start and end data for
from a string. */
  sendEvent() {
    if (this.state.eventSubject && this.state.startTime && this.state.endTime) {
      let event = {
        'summary': this.state.eventSubject,
        'start': {
          'date': this.state.startTime
        },
        'end': {
          'date': this.state.endTime
        }
      };

      let request = gapi.client.calendar.events.insert({'calendarId': 'primary', 'resource': event});

      request.execute(function(event) {
        alert("I worked");
      });

      this.setState({
        eventSubject: "",
        startTime: "",
        endTime: ""
      });
    } else {
      alert("didn't work fam");
    }
  }

  render() {
    return (<form>
      <input type="text" value={this.state.eventSubject} onChange={this.setEventSubject} id="subjectTxtBx" placeholder="Enter event name"/>
      <input type="text" value={this.state.startTime} onChange={this.setStartTime} id="startTime" placeholder="Enter start time of event"/>
      <input type="text" value={this.state.endTime} onChange={this.setEndTime} id="endTime" placeholder="Enter end time of event"/>
      <input type="button" onClick={this.sendEvent} id="submitEvent" value="Submit Event"/>
    </form>);
  }
}

export default AdderForm;
