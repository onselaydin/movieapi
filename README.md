[![Build status](https://travis-ci.org/onselaydin/movieapi)](https://travis-ci.org/onselaydin/movieapi.svg)

# movieapi
nodejs api prj

# Movies
Route | HTTP Verb   | Post body     | Description   |
--- | --- | --- | --- |
/api/movies | 'GET' | Empty | List all movies |
/api/movies | 'POST' | {'title':'foo','category':'bar','country':'USA' } | insert movie |
/api/movies | 'GET' | Empty | Get a movie. |
/api/movies/:movie_id | 'PUT' | Empty | {'name': 'foo', 'surname':'bar' | update movie |
/api/movies/:movie_id | 'DELETE' | Empty | Delete moview |
/api/movies/top10 | 'GET' | Empty | Get 10 movie |
/api/movies/between:start_yeat/:end_year | 'GET' | Empty | movies between |

# Directors
Route   |   HTTP Verb   |   Post Body   |   Description |
--- | --- | --- | --- |
/api/directors | GET | Empty | List all Directors.
/api/directors | POST | { name:'foo', surname:'bar',bio:'test'} | Create
/api/directors/:director_id | GET | Empty | Get a director
/api/directors/:director_id | PUT | {name:'foo', surname:'bar'} | update director
/api/directors/:director_id | DELETE | Empty | delete director.
/api/directors/bes10movie | GET | Empty | Top 10 film

# Users
Route   |   HTTP Verb   |   Post Body   |   Description |
/register | POST | {username:'foo',password:'1234'} | Create a new user  