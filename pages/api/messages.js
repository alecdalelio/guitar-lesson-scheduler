import { db } from "../../config/firebaseConfig";

export default async (req, res) => {
  if (req.method === "GET") {
    // Get a list of all messages
    const messagesRef = db.collection("messages");
    const snapshot = await messagesRef.get();
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(messages);
  } else if (req.method === "POST") {
    // Create a new message
    const { sender, recipient, text } = req.body;
    const message = { sender, recipient, text };
    const docRef = await db.collection("messages").add(message);
    res.status(201).json({ id: docRef.id, ...message });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
