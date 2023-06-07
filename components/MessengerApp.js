import { useState, useEffect } from "react";

function MessengerApp({ teacherId }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`/api/messages?teacherId=${teacherId}`);
        const data = await response.json();
        setMessages(data.messages);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();

    return () => {
      // Cleanup logic here (if needed)
    };
  }, [teacherId]);

  const sendMessage = async () => {
    try {
      await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify({ teacherId, message: newMessage }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setNewMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Messenger App</h2>
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <p>{message.text}</p>
            <p>Sent by: {message.sender}</p>
          </div>
        ))}
      </div>
      <div className="message-input flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border rounded-md py-2 px-4 flex-grow mr-2"
        />
        <button
          onClick={sendMessage}
          className="bg-sunrise-orange text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default MessengerApp;
