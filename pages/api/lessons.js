import { db } from "../../config/firebaseConfig";

export default async (req, res) => {
  if (req.method === "GET") {
    // Get a list of all lessons
    const lessonsRef = db.collection("lessons");
    const snapshot = await lessonsRef.get();
    const lessons = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(lessons);
  } else if (req.method === "POST") {
    // Create a new lesson
    const { teacherId, studentId, date, duration } = req.body;
    const lesson = { teacherId, studentId, date, duration };
    const docRef = await db.collection("lessons").add(lesson);
    res.status(201).json({ id: docRef.id, ...lesson });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
