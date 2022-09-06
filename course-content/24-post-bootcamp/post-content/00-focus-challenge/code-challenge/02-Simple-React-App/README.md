# Simple React App

## Create a Simple React App that makes a request to the API provided

* Create a react app `create-react-app <your app name>`

* Create a button *View all words* . Add an event listener to the button which makes an axios call to get all words in the dictionary. With the return data, map out a new component(Could be a card/list of your choice to display all results)

* Create an input field to get a word from user. Create a button so that, on submit, it grabs the user's word and makes an api call to retrive the meaning of it. With the return data, map out a new component(Could be a card/list of your choice to display all results)

* Create an input field to get a letter from user. Create a button so that, on submit, it takes the user's letter and makes an api call to retrive all the words starting with that letter. With the return data, map out a new component(Could be a card/list of your choice to display all results)

*Hint*: If you get CORS issue, then you might have to use `Express-cors` middleware in the previous activity(Inside your server file) 