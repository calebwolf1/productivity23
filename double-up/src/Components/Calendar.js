import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useEffect, useState } from "react";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const [events, setEvents] = useState([
              {
                // start: "2023-11-10T08:00:00",
                // end: "2023-11-10T11:00:00",
                start: moment().toDate(),
                end: moment()
                .add(4, "hour")
                .toDate(),
                title: "EATT",
                color: "#cc5500"
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

