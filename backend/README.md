## Steps for running the backend server

1. Clone the repositiory.
2. Go to the backend folder.
3. run  `npm install` to install all the packages dependencies for the project.
4. Create a free account and sandbox at MLab or Mongo atlas then create a user (After this you will have URL with username and password)
5. create a app-env file.
6. Add `EXPORT MONGOURL="XXXXX"` <br/>
    `EXPORT USERNAME="XXXXX"` <br/>
    `EXPORT PASSWORD="XXXXX"`

7. run the `source app-env` to add all the enviroment variables to the system.
8. Go to `config\DBSetup.js` to change<br>
         `DBURL = process.env.MONGOURL`
9.  Add `USERNAME=process.env.USERNAME`<br/>
        `PASSWORD=process.env.PASSWORD`
10. Now run `npm run dev`
11. Server will be running at port `3000` or any free port.

