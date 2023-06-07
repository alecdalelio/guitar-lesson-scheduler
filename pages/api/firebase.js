import { getFirestore, collection, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../../firebaseConfig";

let db;
let auth;
let analytics;

// Check if running in the client-side browser environment
if (typeof window !== "undefined") {
  // Import Firebase Analytics dynamically
  import("firebase/analytics").then((module) => {
    const { getAnalytics } = module;
    analytics = getAnalytics(app);
  });

  // Initialize Firestore and Auth
  db = getFirestore(app);
  auth = getAuth(app);
}

export { db, auth, collection, doc, analytics };
