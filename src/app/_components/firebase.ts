import { initializeApp } from "firebase/app";

import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAuXk5-4Kf9VRqONUyu1d6lnB4Fg777kFg",
  authDomain: "smarttoilette-42039.firebaseapp.com",
  projectId: "smarttoilette-42039",
  storageBucket: "smarttoilette-42039.appspot.com",
  messagingSenderId: "500498330137",
  appId: "1:500498330137:web:8ece0f1688a24da1bbb088",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
