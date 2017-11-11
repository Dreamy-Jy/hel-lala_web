/*global gapi*/
import React, {Component} from 'react';

class AddEvents extends Component{

render()

{
return(
<form>
  <input type ="text" id = "SubjectTxtBx"
  placeholder= "Enter event name" />
<input type ="text" id = "startTime"
  placeholder = "Enter start time of event"/>
  <input type = "text" id = "endTime"
  placeholder= "Enter start time of event"/>
</form>
)
}


//var eventName = document.getElementById(SubjectTxtBx).value;
//var startTime = document.getElementById(startTime).value;
//var endTime = document.getElementById(endTime).value;


};
export default AddEvents;
