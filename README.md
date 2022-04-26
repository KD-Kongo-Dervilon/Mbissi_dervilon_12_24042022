# P12: React & Recharts Dashboard / SportSee

Lien website: https://kd-kongo-dervilon.github.io/Mbissi_dervilon_12_24042022/

[![forthebadge](./made-with-create-react-app.svg)](https://create-react-app.dev/)
[![forthebadge](./uses-recharts.svg)](https://recharts.org/en-US/)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## Project's presentation

SportSee is a startup dedicated to sport's coaching. The purpose of this project is to developp a brand new Dashboard's version of their application, where the user can check any important data about his sport's practice.

This project has been developped with React and <a href="https://recharts.org/en-US/">Recharts librairie</a>.

Build an athletic user profile page in React, fetching data from a NodeJS server.

## To run this project you need : 

  1.Git

  2.NodeJs

  3.npm 

  4.Vscode(recommended)

## Dependencies

- [React](https://reactjs.org/) v17.0.2

- [Axios](https://github.com/axios/axios) v0.26.0

- [recharts](https://recharts.org/en-US) v2.1.9

- [prop-types](https://www.npmjs.com/package/prop-types) v15.8.1

- [Sass](https://sass-lang.com/) v1.49.9

## How to:

###  use this apllication you need the backend :

  1. clone this repository use ``` git clone https://github.com/KD-Kongo-Dervilon/P9-front-end-dashboard ```

  2. in your terminal use ``` npm i ```

  3. to start the backend use  ``` npm run start ``` (the backend start at port:3000)

  ### URL/PORT

The default URL used by the micro-API is <http://localhost:3000>.

###  setup and start the Front-End application:

  1. clone this repository use ``` https://github.com/KD-Kongo-Dervilon/Mbissi_dervilon_12_24042022.git ```

  2. in your terminal use  ``` npm i ```

  3. to start the backend use  ``` npm start ``` (the application start at port:3006)

  4. In your Browser go to : http://localhost:3006/

  5. click on the logo to toggle users.

  ### URL/PORT

The default URL used by the application is <http://localhost:3006>.
You can change the port modifying the *.env* file at root, simply by changing the port number referenced at ```PORT``` variable. *If the application is already launched, you shall stop it and re-launch it*.

If you use a different API URL(back-end part) than the default one, you can set the right URL in the *.env* file at root by changing the value of the ```REACT_APP_API_URL``` variable. *If the application is already launched, you shall stop it and re-launch it*.

### USE WITHOUT BACKEND

You can test the application without the back-end part, using a mocked file placed in the folder *"./src/mock/data.js"* containing two default users. Access the *.env* file at root, and change the ```REACT_APP_MOCKED_DATA``` variable to *true*. *If the application is already launched, you shall stop it and re-launch it*.

### start jsDocs :

npm i jsdoc

To install the latest version on npm locally and save it in your package's package.json file:

npm install --save-dev jsdoc

this generates the docs in a folder ./docs in the root of the project.

npm run docs


  # Documents

Find the app mock-up on [Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)