import { db } from "../../config/firebaseConfig";

export default async (req, res) => {
  if (req.method === "GET") {
    // Get a list of all teachers
    const teachersRef = db.collection("teachers");
    const snapshot = await teachersRef.get();
    const teachers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(teachers);
  } else if (req.method === "POST") {
    // Create a new teacher
    const { name, email, bio } = req.body;
    const teacher = { name, email, bio };
    const docRef = await db.collection("teachers").add(teacher);
    res.status(201).json({ id: docRef.id, ...teacher });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
