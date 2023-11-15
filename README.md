Create a file named Push-app. Create 2 folders inside it named client and server.
Inside the client side install all the necessary modules for create react app. Just write npx create-react-app and copy the contents from App.js to your App.js file. 
Install web-push library to implement web push notifications from server to your devices. Use command: npm install web-push.
All the necessary comments are already there in the code.
We are making use of service-worker here to get push notifications from web apps. Service workers are basically used for background web synchronization. synchronize data with server even when the app is not running, get push notifications.
Service-worker.js file is in the public folder of repo. Include that file to work with your development server which is running at port: 3000.
Now in the frontend there will be 3 buttons to test the push notifications. Here User 1 has subscribed to Push subscription so it is getting notification on desktop meanwhile user 2 has not subscribed so is only getting a message in console and user 3 is not present so is getting not found error in console.
If user has push subscription, it will recieve push notification else not.
The server file is stored in different repo: https://github.com/SamyakShukla/Push-app-Server.git
The server details are in that repo readme.
