import { useState } from "react";

function LessonForm({ teacherId, onLessonScheduled }) {
  const [meetLink, setMeetLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send lesson scheduling request to API
      const response = await fetch("/api/lessons/schedule", {
        method: "POST",
        body: JSON.stringify({ teacherId, meetLink }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Lesson scheduling successful
        // Call the callback function
        onLessonScheduled();
      } else {
        // Lesson scheduling failed
        console.error("Failed to schedule lesson");
      }
    } catch (error) {
      console.error("Failed to schedule lesson:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Schedule a Lesson</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sunrise-red block mb-2" htmlFor="meetLink">
            Google Meet Link:
          </label>
          <input
            type="text"
            id="meetLink"
            value={meetLink}
            onChange={(e) => setMeetLink(e.target.value)}
            className="border rounded-md py-2 px-4"
          />
        </div>
        <button
          type="submit"
          className="bg-sunrise-orange text-white px-4 py-2 rounded-md shadow-md"
        >
          Schedule
        </button>
      </form>
    </div>
  );
}

export default LessonForm;
