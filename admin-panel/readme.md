# BACKEND
1. First clone the project ``` git clone https://github.com/scorelab/dengue-stop.git ```
2. Follow this command ``` cd dengue-stop/admin-panel```
3. Now run this ```npm install ```
4. After all this , it's time to create MongoDB URI.
    a. Install MongoDB Community from this link ```https://www.mongodb.com/download-center/community```
    b.  Run this command in cmd( open another cmd) : ```"C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"``` (with double inverted commas )
    c. Create a mongo db database using command : ```use <name_of_database>```
    d. You will get your mongodb uri , which looks like: ```mongodb://127.0.0.1:27017/<name_of_database> ```.
    e. Keep the command prompt running as it will keep the database running.
5. Place this MongoDB URI in ```keys.js``` which is present in ```config folder```.
6. Now run command ```nodemon run server``` in cmd ( make sure that you are in ```admin-panel``` directory )
7. Now you will get a message on cmd ```MongoDB Successfully Connected```.
8. Now MongoDB has been successfully connected and backend is running properly.


# ADMIN PANEL : 
1. This admin panel is made to monitor the reported cases of dengue using the Dengue Stop Community App.
2. Admin can see the location from where the report has been made.
3. Admin can see the count of reported cases in recent times.
4. Basically this admin panel will help the authorities to take necessary steps in order make people safe from Dengue.
5. This Dengue Stop Admin Panel can be extended to other diseases also.

