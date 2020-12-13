Project Title:- Todo Application

# Things to install :- node and npm

To start the project first create a demo app using command "npx create-react-app appname" on command prompt
Next step would be go to the src folder in the do the changes that you want to see in the app in the index.js file.

Logic would be to create a state using useState hook which we can change in any function without the issue of scope.

We have two major components Task and Project. We have a default task where we can add projects. If we have some other work then we can add more tasks and corresponding projects.

First step would be to make two state component variales task and projects which are nothing but array of objects.

Then we have to make three components . First is the app component where we call other components, second is the Project component where we update the projects array and last is the task component where we update the task.



