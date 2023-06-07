import { db } from "../../config/firebaseConfig";

export default async (req, res) => {
  if (req.method === "GET") {
    // Get a list of all students
    const studentsRef = db.collection("students");
    const snapshot = await studentsRef.get();
    const students = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(students);
  } else if (req.method === "POST") {
    // Create a new student
    const { name, email } = req.body;
    const student = { name, email };
    const docRef = await db.collection("students").add(student);
    res.status(201).json({ id: docRef.id, ...student });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
