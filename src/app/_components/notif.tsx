"use client";
import { initializeApp } from "firebase/app";

import { useEffect, useRef } from "react";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export function NotifContainer() {
  const messaginRef = useRef<any>();
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const firebaseConfig = {
        apiKey: "AIzaSyAuXk5-4Kf9VRqONUyu1d6lnB4Fg777kFg",
        authDomain: "smarttoilette-42039.firebaseapp.com",
        projectId: "smarttoilette-42039",
        storageBucket: "smarttoilette-42039.appspot.com",
        messagingSenderId: "500498330137",
        appId: "1:500498330137:web:8ece0f1688a24da1bbb088",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      messaginRef.current = messaging;
      const token = await getToken(messaging, {
        vapidKey:
          "BPUT9Ns96MzK1QwjsDLGmYlDfPE0YnVKhHY4SCkGSIF795mLOf2FHXNE5XDhuHyq_CtObr5osbWeYcNrg3vBP5o",
      });
      console.log("Token Gen", token);
      onMessage(messaging, (e) => {
        console.log("onMessage", e);
        new Notification("ssss");
        new Notification(e.notification?.title ?? "", {
          body: e.notification?.body ?? "",
        });
      });
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    let unSubscribe: any;
    if (messaginRef.current) {
      unSubscribe = onMessage(messaginRef.current, (e) => {
        console.log("onMessage", e);
        new Notification("ssss");
        new Notification(e.notification?.title ?? "", {
          body: e.notification?.body ?? "",
        });
      });
    }

    return () => unSubscribe && unSubscribe();
  }, [messaginRef]);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          requestPermission();
        }}
      >
        notif
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          new Notification("salam");
        }}
      >
        notif local
      </button>
    </>
  );
}
