importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Konfigurasi Firebase kamu
firebase.initializeApp({
  apiKey: "AIzaSyBGG2Olyw_S8LkLrydjszhlLPrVryafwUU",
  authDomain: "hitlerapp.firebaseapp.com",
  databaseURL: "https://hitlerapp-default-rtdb.firebaseio.com",
  projectId: "hitlerapp",
  storageBucket: "hitlerapp.firebasestorage.app",
  messagingSenderId: "644338912723",
  appId: "1:644338912723:web:2f35473aa080819a77f326",
  measurementId: "G-4GDLP38GR5"
});

const messaging = firebase.messaging();

// Menangani notifikasi saat aplikasi berada di latar belakang
messaging.onBackgroundMessage((payload) => {
  console.log('Ada pesan di latar belakang: ', payload);

  const notificationTitle = payload.notification ? payload.notification.title : "Pesan Baru";
  const notificationOptions = {
    body: payload.notification ? payload.notification.body : "Kamu memiliki pesan baru.",
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
