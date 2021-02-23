<!-- Title of the project -->
  # eat-da-burger
  
  [![MIT License](https://img.shields.io/badge/MIT-License-brightgreen)](https://choosealicense.com/licenses/)
  

  <!-- Description of the project -->
  An web-based burger logger. Created with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Follows hte MVC design pattern; uses Node and MySQL to query and route data in the app and Handlebars to generate the HTML. Data is rendered in HTML from a database stored on a server.

  ## Link to the Deployed App
  [Link to the deployed Eat-da-Burger app](https://mysterious-caverns-48540.herokuapp.com/)

  ## Link to Github repo
  [Link to Github repo for Eat-da-Burger app](https://github.com/blakestickland/burger.git)

  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
      
  ## Screenshot

  ![Screenshot of the Eat-da-Burger app](https://user-images.githubusercontent.com/73763708/108812604-87304880-7603-11eb-9aa7-e9b5dce17ebc.png)


  ## Usage
  1. Open the listed web address in your browser. 
  2. You will be presented with the MySQL database seeded data: one for burgers ready to eat and the other for burgers consumed (or devoured). Click on the 'Devour Me!!' button to eat one of the burgers listed in the 'Burgers ready to E.A.T. column. It will be moved to the 'Consumbed Burgers' column. 
  3. Click on an 'Eat Again?' button to get a burger ready to eat. It will be moved to the 'Burgers ready to E.A.T.' column. 
  4. If you don't want one of the burgers on either list anymore, click the 'Delete' button. 
  5. If you would like to order a different burger, please type the name of the burger in the 'Add Burger' text box. 
  6. Choose which list you would like to add the new burger to: ready to E.A.T. or Burgers Consumed. 
  
  ## License
  [MIT License](https://choosealicense.com/licenses/)
  
  ## Contributing
  Email me at blakestickland@gmail.com or fork the repo, make a change and submit a pull request.
  
  ## Installation if forking the repo
  1. After forking, navigate to the root folder for the app.
  2. Run the following commands in the Terminal to install packages needed to run the app.
   ``` bash
  npm install
  ``` 
  ``` bash
  npm install express
  ``` 
  ``` bash
  npm install express-handlebars
  ``` 
  ``` bash
  npm install mysql
  ``` 
  ``` bash
  npm install nodemon
  ``` 
  This complete the npm install of dependencies. 
  3. Login to MySQL.
  4. Run the schema.sql then the seeds.sql to create, then populate the database. 
  Navigate to the connection.js file in the config folder. Update the connection information to reflect localhost, port and password settings to access the database.
  5. Run the following command in terminal to start the server. 
  ``` bash
  npm run watch
  ```
  6. Enter the localhost port the server is running on in your browser and you should see the functioning app.

  ## Questions
  Please refer any questions via Github or my email address.
  Github username: [blakestickland](https://github.com/blakestickland)

  Email: blakestickland@gmail.com