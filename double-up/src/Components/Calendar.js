import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useEffect, useState } from "react";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const [events, setEvents] = useState([
              {
                start: new Date(2023, 10, 11, 1, 0),
                end: new Date(2023, 10, 11, 2, 0),
                // start: moment().toDate(),
                // end: moment()
                // .add(4, "hour")
                // .toDate(),
                title: "EATT",
                color: "green",
              }
            ]);
    // const [localizer, setLocalizer] = useState();

    // useEffect(() => {
    //     setLocalizer(momentLocalizer(moment));
    // }, []);

    return(
        <Calendar 
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="week"
            events={events}
            style={{ 
                height: "100vh",
                width: "140vh",
                padding: "10vh"
            }}
            />
    );
}

export default MyCalendar;

