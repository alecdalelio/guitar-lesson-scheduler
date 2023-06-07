// import { Provider as NextAuthProvider } from "next-auth/react";
// import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   return (
//     <NextAuthProvider session={pageProps.session}>
//       <Component {...pageProps} />
//     </NextAuthProvider>
//   );
// }

// export default MyApp;

import { useEffect } from "react";
import { Provider as NextAuthProvider } from "next-auth/react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/messaging";
import { firebaseConfig } from "../config/firebaseConfig";
import "../styles/globals.css";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (!user && router.pathname !== "/login") {
          router.push("/login");
        }
      });

    return () => unregisterAuthObserver();
  }, []);

  return (
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
