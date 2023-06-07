import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TeacherAvailabilityCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availability, setAvailability] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAvailabilityUpdate = () => {
    // Check if the selected date already has availability set
    const existingAvailability = availability.find(
      (item) => item.date.getTime() === selectedDate.getTime()
    );

    // If availability for the selected date already exists, remove it
    if (existingAvailability) {
      const updatedAvailability = availability.filter(
        (item) => item.date.getTime() !== selectedDate.getTime()
      );
      setAvailability(updatedAvailability);
    } else {
      // Add availability for the selected date
      const newAvailability = [...availability, { date: selectedDate }];
      setAvailability(newAvailability);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Teacher Availability Calendar</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className="border rounded-md py-2 px-4 mb-2"
      />
      <button
        onClick={handleAvailabilityUpdate}
        className="bg-sunrise-orange text-white px-4 py-2 rounded-md"
      >
        {availability.find(
          (item) => item.date.getTime() === selectedDate.getTime()
        )
          ? "Remove Availability"
          : "Set Availability"}
      </button>
      {/* Render the calendar and availability */}
    </div>
  );
}

export default TeacherAvailabilityCalendar;
