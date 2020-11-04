# Nodejs-E-Commerce-application-incl.-MVC-REST-APIs-MongoDB-
Demonstrator project

How to use:
1. Make sure Node is installed on your machine - https://nodejs.org/en/download/
2. These packages are used:
Step 1:
npm init
//it create the package.json

Step2
npm install --save express
//we will see express appears in the package.json dependencies
// it installed as production dependencie

Step3
npm install --save-dev nodemon

//it appears in package.json devdependencies

Step4:
edit package.json script,
add "start": "nodemon app.js"
"start-server": "node app.js"

Step5:
npm install --save body-parser

Step6
template engines installintall:
npm install --save ejs pug express-handlebars

npm install --save express-handlebars@3.

STEP7: mySQL install
npm install --save mysql2

STEP 8: SEQUELIZE
npm install --save sequelize
(need the mysql2 package before install)

STEP 9: MONGO DB
npm install --save mongodb

STE10:MONGOOSE
npm install --save mongoose

STEP11:VALIDATOR
Add express-validator
npm install --save express-validator


STEP12: FILES UPLOAD
npm install --save uuid
npm install --save multer

STEP13: password hashing
npm install --save bcryptjs

STEP14: Jason Web Token
npm install --save jsonwebtoken


STEP15: SESSION
npm install --save express-session




2. Unzip node_modules
3. Create a MongoDB database in MongoDB Compass https://www.mongodb.com/download-center/compass
4. Modify app_modify_and_rename.js with your mongodb compass link mongoose.connect('mongodb+srv://xxxxx')
5. Rename app_modify_and_rename.js  in app.js
6. Execute "npm start" command in the root directory
7. Visit http://localhost:3000/
