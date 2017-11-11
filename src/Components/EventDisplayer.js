/*global gapi*/
import React, {Component} from 'react';

class EventDisplayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: []
    };

  }
  componentDidMount() {
    var list = null;
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then(function(response) {
      list = response.items
    })

    this.setState({
      events: list
    })
    console.log(this.state.events);
  }
render(){
  return (
    <section>
      Hello Events
    </section>
  )
}}


export default EventDisplayer;
