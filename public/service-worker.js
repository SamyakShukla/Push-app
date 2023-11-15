//service worker is here handling the push event
self.addEventListener('push', function (event) {
  const payload = event.data ? event.data.text() : null;

  console.log('Received push event with payload:', payload);

  if (payload) {
    const options = {
      body: payload,
      
    };

    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  } else {
    console.log('No payload found. Not showing notification.');
  }
});
