import { db, auth } from "../../config/firebaseConfig";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      // Register a new user
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const { uid } = userCredential.user;

      // Create a corresponding user profile in Firestore
      const userRef = db.collection("users").doc(uid);
      await userRef.set({ email });

      res.status(201).json({ id: uid, email });
    } catch (error) {
      console.error("Failed to register user:", error);
      res.status(500).json({ error: "Failed to register user" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
