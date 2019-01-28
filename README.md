# movieapi
nodejs api prj

#Movies
Route | HTTP Verb   | Post body     | Description   |
--- | --- | --- | --- |
/api/movies | 'GET' | Empty | List all movies |
/api/movies | 'POST' {'title':'foo','category':'bar','country':'USA' } | insert movie |
/api/movies | 'GET' | Empty | Get a movie. |
/api/movies/:movie_id | 'PUT' | Empty | {'name': 'foo', 'surname':'bar' | update movie |
/api/movies/:movie_id | 'DELETE' | Empty | Delete moview |
/api/movies/top10 | 'GET' | Empty | Get 10 movie |
