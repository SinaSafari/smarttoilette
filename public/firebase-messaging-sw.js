// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAuXk5-4Kf9VRqONUyu1d6lnB4Fg777kFg",
  authDomain: "smarttoilette-42039.firebaseapp.com",
  projectId: "smarttoilette-42039",
  storageBucket: "smarttoilette-42039.appspot.com",
  messagingSenderId: "500498330137",
  appId: "1:500498330137:web:8ece0f1688a24da1bbb088",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
