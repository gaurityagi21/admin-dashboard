// src/pages/Calendar.js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => (
  <div>
    <h2>Calendar</h2>
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'Event 1', date: '2024-06-01' },
        { title: 'Event 2', date: '2024-06-02' },
        // Add more events as needed
      ]}
    />
  </div>
);

export default Calendar;
