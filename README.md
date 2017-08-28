# react-SPA
a single page application about react

1.	Introduction
This single page app is a basic introduction of four different javascript libraries. The user can add comments and also delete comments for each of them.

2.	Main Page
The main page App.js ( ‘src/App.js’), is the main page which includes two child components: header and content.  

3.	Components
	Header
The header includes the logo, title and navigation. The navigation has basic structure of react router, I have not done any content for the sub-pages because of the limited time.
	Content
The content includes the body title and a language list which is a array returned by the function ‘getTasks()’.
	Item
The item is the child component of Content. It shows basic info of each language. Including the name of the item, two buttons and basic introductions.
	commentModal
The commentModal is the child component of Item. It displays the name of each current item, it also provides a textarea where the user can add comments.

4.	Key features
	The user can easily add multiple comments or remove the comments for different libraries.
	The comments are saved in an array which is displayed as a list under the introduction of each javascript library.
	The whole page is split into four components, which helps the app as a whole to be more maintainable.
	The Libraries page used react router 4 which is a composable way to navigate in react. 
	The system will add a current time for every comment automatically.

5.	Improvement
	I would like to redo the css, improving the UI.
	I would like to add the function for sign in/sign up system for the app, so user could find who did these comments. 
	I would like to make it so that a user can remove a single comment, instead of all the comments being removed for the given library.
	I would like to add more contents for Libraries page and its sub-pages.
