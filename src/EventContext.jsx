import React, { createContext, useState, useContext } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [futureEvents, setFutureEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const addEvent = (newEvent) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    const eventDate = new Date(newEvent.startDateTime);

    if (eventDate >= today) {
      setFutureEvents((prevEvents) => [...prevEvents, newEvent]);
    } else {
      setPastEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };

  const filterEvents = (events, isFuture) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return events.filter(event => {
      const eventDate = new Date(event.startDateTime);
      return isFuture ? eventDate >= today : eventDate < today;
    });
  };

  return (
    <EventContext.Provider value={{ futureEvents, setFutureEvents, pastEvents, setPastEvents, addEvent, filterEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => useContext(EventContext);
