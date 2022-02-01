# FILM GUESS
This is a small web app that tests your film knowledge
You will guess the movie based on the year given and the top 6 actors that will be diplayed

## Start

### Client

To start the client view, you must run `yarn start` to run in a development build of the project

---

### Server
To start the server you must provide an api key from imdb-api to use any of the endpoints, you must also provide a link to the mongodb database, after that has been done, you can run `yarn watch` to compile the existing typescript into javascript then `yarn start` to run that javascript

## Endpoints
The backend has two endpoints: /movies and /movies/add/<imdb-id> 

### /movies
  
This endpoint grabs a random movie from the database providing the title, poster, and list of top 6 actors
  
---
  
### /movies/add/<imbd-id>
  
This endpoint adds the specified movie to the database using the specified id and returns the document that has been added
