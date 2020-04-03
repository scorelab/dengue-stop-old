# Forums Section

This feature will allow users to submit a post, like a post and comment on any post.  

The forums screen will have the following fields :  
- ```Description``` - A description of the post.
- ```Photo``` - A photo can be attached to a post too.
- ```Likes``` - Users can like any post.
- ```Comment``` - Users can comment on posts and discuss them.

The data will be stored in the Firebase in the following way:-
- ```user``` - name of the user who submitted the post.
- ```timeStamp``` - timeStamp of the post submission.
- ```image``` - URI of the post image.
- ```description``` - description of the post.
- ```likes``` - array containing the email id's of the users who have liked the post.
- ```comments``` - collection containing comments of the users.
- ```commentText``` - comment text which user has commented.
- ```user``` - name of the user who commented.
- ```avatar``` - avatar image URI of the user.

### Firebase Console  

![picture alt](https://user-images.githubusercontent.com/43493203/77234779-20c2cf00-6bd7-11ea-923f-daf5125b78b3.png "Title is optional")  
```Document id``` here is the timestamp of the post creation and posts are sorted according to the timestamp.  

![picture alt](https://user-images.githubusercontent.com/43493203/78218248-1956cc00-74db-11ea-8a6e-43c9d0c3306c.png "Title is optional")  
```Document id``` here is the timestamp of the comment and comments are also sorted according to timestamp.


## Screenshots

HomeScreen  

![picture alt](https://user-images.githubusercontent.com/43493203/77234623-e99fee00-6bd5-11ea-9cad-d1a3583cba03.png "Title is optional")  

AddPost  

![picture alt](https://user-images.githubusercontent.com/43493203/77169407-71570100-6adf-11ea-886f-46a1ff76d173.png "Title is optional") 