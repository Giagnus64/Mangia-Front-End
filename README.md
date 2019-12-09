# Mangia
A web application designed to help users plan and keep track of meals and recipes.  

## Features
Users are able to plan meals based on the recipes that they keep track of. Users can submit their own recipes or select recipes from an API search or other user-submitted recipes. Once a user has bookmarked a recipe, they can assign it to a meal time on a specific day. 

## Demo
[Live](https://mangia-client.herokuapp.com/)(User: test Pass:123)| [Video](https://youtu.be/Oh4hvCiwSOI)


## Built with
 *Back-end*
- [Ruby on Rails](https://rubyonrails.org) - Server Framework
- [PostgreSQL](https://www.postgresql.org) - Database
- [Firebase](https://firebase.google.com) -Image Storage
- [Edamam Recipe API](https://developer.edamam.com) - Recipe Search API
- Auth using [JWT](https://jwt.io) tokens and [bcrypt ] (https://rubygems.org/gems/bcrypt/versions/3.1.12) encryption
- [Rest-Client](https://github.com/rest-client/rest-client) - HTTP request library


*Front-end*
- [React](https://reactjs.org/docs/getting-started.html) - Front-end Framework
- [React Redux](https://react-redux.js.org) - 
- [Bulma](https://bulma.io) - CSS framework with [Sass] formatted custom CSS(https://sass-lang.com)
- [react-bulma-components - npm](https://www.npmjs.com/package/react-bulma-components/v/3.0.1-1)
- [Font Awesome Icons](https://github.com/FortAwesome/react-fontawesome)
- [date-fns - JavaScript date utility library](https://date-fns.org)
- [react-day-picker - Flexible date picker component for React](https://react-day-picker.js.org)
- [react-firebase-file-uploader - npm](https://www.npmjs.com/package/react-firebase-file-uploader)




## Installation
WARNING: API search & firebase image uploads will NOT work since API keys are stored locally 

*Requirements*
 - [Node.js](https://nodejs.org/en/)
 - [Installing Ruby](https://www.ruby-lang.org/en/documentation/installation/)
 - [PostgreSQL](https://www.postgresql.org)


In your clone/fork of this repo: 
```bash
npm install - #installs all dependencies
npm start - #runs a development server 
```
The instructions for the back-end of this app are [here](https://github.com/Giagnus64/Mangia-API). You'll need to clone/fork both repos. 



## License
[MIT](https://choosealicense.com/licenses/mit/)
