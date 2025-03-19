-- 1 Get a list of all the languages, from the language table.
SELECT * FROM film
SELECT * FROM la

-- 2 Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT title,description,language.name 
FROM film
JOIN language ON film.film_id = language.language_id

-- 3 Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT title,description,language.name 
FROM film
LEFT JOIN language ON film.film_id = language.language_id

-- 4 Create a new table called new_film with the following columns : id, name. Add some new films to the table.