## App Overview
This a movie searching and data site. 
You search for a movie using the search box.The closest movies are displayed. You click on a movie and the details of the movie is displayed.


## Getting Started
Follow this [link](https://www.google.com/url?q=https%3A%2F%2Frapidapi.com%2Frapidapi%2Fapi%2Fmovie-database-alternative%2F&sa=D&sntz=1&usg=AOvVaw3wBNHp7RHGM9TP2qeMi1Io) and obtain an API key. Make sure you subscribe to the API.<br>
Test that the connection is working on the site.<br>
After subscribing, clone this repository.<br>
In your local machine, and in the root folder of the repository, create a **.env.local** file.<br>
In the .env.local file, type in your API key like this:<br>
![an example of how to write the API Key](/assets/images/Screenshot.png)

**Please note the app will malfunction without the API key.**

## Next Steps
In the root folder run the following command in your terminal to install dependencies:<br>
**npm install**

Now run the development server using:<br>
**npm run dev**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Technologies used
This app was created using:<br>
* Next JS for the layout
* SWR for data fetching
* Vanilla CSS

## Why Next JS?
* Next JS was used to due to the ease of routing.
* It was also used because of its' backend capability.
* The server side was used to protect the API key.

## Why SWR?
* Easier to get data with a fewer lines of coding compared to using plain fetch.
* The data caching abilities of SWR

## Why Vanilla CSS?
* Using a framework would unnecessarily bloat the application. The simpler the better.
* Certain details of the app would not be annoying to achieve with a CSS framework.
* Wanted to display my proper understanding of CSS.

## Process Flow
There are 4 pages in this application:
* Home age.
* The page to display all the movies.
* The page to display a specific movie.
* A page to display movies that match a search by the user.
<br>
The major constraint for this app was the API key. This is sensitive and should not show on the client side<br>
<br>To ensure protection, the API key was stored in an environmental variable and then passed to the server.
<br><br>
This means that a request for a movie is first sent to the app's server. The server then sends a request to the database.
After fetching the data, it is sent to the client. The app's server is a middle man.



