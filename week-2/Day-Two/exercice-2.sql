--In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT* FROM customer

--Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customer;

--Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT create_date FROM customer
GROUP BY create_date;

--Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT * FROM customer
ORDER BY first_name DESC

--Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id,title,description,release_year,rental_rate FROM film
ORDER BY rental_rate ASC

--Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT address,phone FROM address
WHERE district = 'Texas'

--Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * FROM film
WHERE film_id in (15,150)

--Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id, title, description, length, rental_rate FROM film
WHERE title = 'Old Boy';