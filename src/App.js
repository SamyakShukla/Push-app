import React, { useEffect } from 'react';
//service workers are basically used for background web synchronization. synchronize data with server even when the app is not running 
// we use service worker here to get push notifications from web apps
function App() {
  useEffect(() => {
   
    //checks if the service worker is supported by the browser then it registers service worker located at path. registration process returns a promise
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);
// pushmanager api allows us to recieve notifications from third party servers 
  const sendNotification = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/send-notification/${userId}`);
      const data = await response.json();
      console.log(data);
      //fetching user details response in console log if the user is getting notification, not found or has not subscribed 

      if ('serviceWorker' in navigator && 'PushManager' in window) {
        // get the active service worker registration that is now registered, installed and now takes control of this scope
        //activating the service worker for this scope
        const registration = await navigator.serviceWorker.getRegistration();

        // requesting permission from user for notification
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
          // if user has push subscription, it will recieve push notification else not
          registration.showNotification('Push Notification', {
            body: data.pushSubscription.length > 0 ? 'Push notification sent successfully' : 'No push subscriptions',
            requireInteraction: true,
          });
        }
      }
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return (
    <div className="App">
      <h1>Push Notification App</h1>
      <p>Here User 1 has subscribed to Push subscription so it is getting notification meanwhile user 2 has not subscribed so is getting a message in console and user 3 is not present so is getting not found error in console</p>
      <button onClick={() => sendNotification(1)}>Send Notification to User 1</button>
      <button onClick={() => sendNotification(2)}>Send Notification to User 2</button>
      <button onClick={() => sendNotification(3)}>Send Notification to User 3</button>
    </div>
  );
}

export default App;
