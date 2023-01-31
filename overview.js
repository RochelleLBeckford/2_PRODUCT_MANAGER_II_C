/*
& Create server folder - Back End
~ npm init -y 
-> Initiate project -> will create package.json 

? Install the dependencies 
~ npm install mongoose express cors dotenv
-> dotenv -> so we can out our ports in our environment variables

-> cors -> cross origin request -> send a request that is not on our local host
-> by defualt our server will block anything not coming from our server
-> need to use a middle ware method to make cors btw express and react
-> whenever need info from the backend we will use this technique

& Can create the other folders in terminal
-> cd server
-> ls -> to see the current folders and files in there
-> mkdir routes models config controllers
-> now the other folders should appear in server


//******************************************************
& Create React App - Front-End
-> in the terminal of where I want the folder to be install react
-> npx create-react-app client(what i want to name the folder that will be housing react)
-> after load -> cd client
?Install dependencies 
-> npm i axios react-router-dom
    -> check package.json -> axios, react, react-router-dom in dependencies
-> npm start to run react app


& Change the App.js and index.js file name to jsx so can utilize all the emmet in the src folder
-> will have to reload the terminal since I changed the file names to jsx and then the react app will appear again
~ index.jsx
-> import { BrowserRouter } from react-router-dom

~ Create Folder w/i src
-> components


& Add bootstrap for css and js to index.html in public folder 
-> or bring in downloaded file for bootswatch -> place it in src folder
-> impoort into App.jsx 
-> import './bootstrap.min.css';

& Project will have 2 folders
-> client folder is for React
-> server folder is for Express

* note -> -> to see what version of Mongo I am on -> in terminal:
-> mongod --version

* note -> if right click in src and say new file 
-> type components/Home.jsx 
-> new folder component and new file Home.jsx will auto create 

* note -> to scale up from your current location in the terminal 
-> cd .. -> hit enter
*/
