# group-project-uix-cock-a-doodle-doo-party-crashers
Application Description:
This application is intended to be used as a news and organizational map to help busy 
executives begin their day. The home screen shows news and weather, while other 
screens allow them to browse meetups in their area, books they are interested in
reading, and other news articles. They have the ability to save any of this
information and come back later to view it.

How to use this Application:
Given I’m a logged-out system user
and I’m on the Sign-In page
When I fill in the “Username” and “Password” fields with my authentication credentials
and I click the Sign-In button
The system signs me in and retrieves my personal data
Given I'm a logged-in system user and I'm on the Home page
When I click on "Meetups", "News", or "Books" I am able to browse items or save
items by clicking the the favorite button
The system populates these favorites on the favorites page
Given I'm a logged-in system user and I'm on the Favorites page
When I click edit or delete, my favorites are removed or editted accordingly

For developers wishing to pull down this project:
This application uses firebase, sass, browserify, grunt, jquery, and moment.js. You will 
need to install these npm install these in your local project. 