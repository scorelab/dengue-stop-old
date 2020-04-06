# Reports Section  
  
In this section, users can report about any disease give symptoms, their name and description. The location of the user will be fetched automatically with the help of expo-location. This data will be stored in the Firebase.  
  
The reports data will have the following fields:-  
- ```description``` - The description of the disease reported by the user.
- ```disease``` - The name of the disease from which the user is suffering as reported by the user.
- ```id``` - Email address of the user who reported(this will be fetched automatically on reporting by getting the current user's email address).
- ```latitiude``` - The latitude of the user's location(this will be fetched automatically on reporting with the help of expo-location).
- ```longitude``` - The longitude of the user's location(this will be fetched automatically on reporting with the help of expo-location).
- ```name``` - The name of the user as reported by the user.
- ```symptomps``` - The symptoms of the user's disease as reported by the user. It will be stored in the form of an array.
- ```timestamp``` - Timestamp of the report submission.  
  
Firebase Console  
  
![image](https://user-images.githubusercontent.com/43493203/77399800-29cac080-6dd0-11ea-9c6b-d186a9711c68.png)  
  
Here the ```Document Id``` represents the timeStamp of the report submission.
  
## Screenshots  
  
AddReportScreen  

![picture alt](https://user-images.githubusercontent.com/43493203/77399749-0ef84c00-6dd0-11ea-8dbd-6080a0d1aca3.png "Title is optional")  
  
AllReportsWorldWideScreen  

![picture alt](https://user-images.githubusercontent.com/43493203/77955382-b7853f00-72ed-11ea-9e6b-1fb60bf6559d.png "Title is optional")

CurrentRegionReportsScreen  

![picture alt](https://user-images.githubusercontent.com/43493203/77959262-eb636300-72f3-11ea-892b-9ce81b2be216.png "Title is optional")

