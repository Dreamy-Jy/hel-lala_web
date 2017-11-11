import React, {Component} from 'react';

class DisplayData extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: []

    };

  }
  componentDidMount() {
    var list = null;
    gapi.client.calendar.events.({
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
      events: list;
    })
  }
render(){
  return (
    <div>


    </div>
  )
}}


export default DisplayData;
