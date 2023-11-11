// import React, { Component } from "react";
// import moment from "moment";

// import "./App.css";

// const localizer = momentLocalizer(moment);

// class App extends Component {
//   state = {
//     events: [
//       {
//         start: moment().toDate(),
//         end: moment()
//           .add(4, "hour")
//           .toDate(),
//         title: "EATT",
//         color: "#C97D60"
//       }
//     ]
//   };

  

//   render() {
//     return (
//       <div className="App">
//         <Calendar
//           localizer={localizer}
//           defaultDate={new Date()}
//           defaultView="month"
//           events={this.state.events}
//           style={{ 
//             height: "100vh",
//             width: "140vh",
//             padding: "10vh"
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;
import CalendarPage from "./Pages/CalendarPage"

function App() {
  return(
    <CalendarPage />
  )
}

export default App;