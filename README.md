Create a file named Push-app. Create 2 folders inside it named client and server. <br>
Inside the client side install all the necessary modules for create react app. Just write npx create-react-app and copy the contents from App.js to your App.js file. <br>
Install web-push library to implement web push notifications from server to your devices. Use command: npm install web-push. <br>
All the necessary comments are already there in the code. <br>
We are making use of service-worker here to get push notifications from web apps. Service workers are basically used for background web synchronization. synchronize data with server even when the app is not running, get push notifications. <br>
Service-worker.js file is in the public folder of repo. Include that file to work with your development server which is running at port: 3000. <br>
Now in the frontend there will be 3 buttons to test the push notifications. Here User 1 has subscribed to Push subscription so it is getting notification on desktop meanwhile user 2 has not subscribed so is only getting a message in console and user 3 is not present so is getting not found error in console. <br>
If user has push subscription, it will recieve push notification else not. <br>
The server file is stored in different repo: https://github.com/SamyakShukla/Push-app-Server.git <br>
The server details are in that repo readme. <br>
Run the server in one terminal and client side react development server in another terminal to make it work. Now push buttons to get notifications. <br>
![Screenshot (1774)](https://github.com/SamyakShukla/Push-app/assets/79325081/9f6d2525-2257-4c72-bdd4-125cba504b99)
