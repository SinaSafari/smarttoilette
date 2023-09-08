"use client";

import { useEffect } from "react";

export async function NotifContainer() {
  useEffect(() => {
    Notification.requestPermission().then((prem) => {
      console.log({ prem });
    });
  }, []);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          const notification = new Notification("سلام", {
            icon: "http://localhost:3000/danger.png",
            dir: "rtl",
            image: "http://localhost:3000/warning.png",
            actions: [
              {
                action: "a",
                title: "توالت",
                icon: "http://localhost:3000/toilette.png",
              },
            ],
          });
        }}
      >
        notif
      </button>
    </>
  );
}
