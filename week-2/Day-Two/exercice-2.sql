--In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer

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
SELECT (first_name,last_name) as full_name,address.phone,address.address  from customer
JOIN address 
ON (customer.address_id = address.address_id ) 
WHERE address.district = 'Texas'

--Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * FROM film
WHERE film_id in (15,150)

--Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id, title, description, length, rental_rate FROM film
WHERE title = 'Old Boy';

--No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, length, rental_rate FROM film
WHERE title LIKE 'Ol%';

--Write a query which will find the 10 cheapest movies.
SELECT title AS cheapest_movies FROM film
ORDER BY rental_rate ASC
LIMIT 10

-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
SELECT title AS cheapest_movies FROM film
ORDER BY rental_rate ASC
LIMIT 10 OFFSET 10;
--Bonus: Try to not use LIMIT. "you can use a subquery with ROW_NUMBER()"

--Write a query which will join the data in the customer table and the payment table. 
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id;

-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT film.film_id, film.title FROM film
LEFT JOIN inventory
ON inventory.film_id = film.film_id
WHERE inventory.inventory_id IS NULL;

--Write a query to find which city is in which country.
SELECT city,country FROM city
JOIN country
ON country.country_id = city.country_id

--Bonus
SELECT 
    customer.customer_id, 
    customer.first_name, 
    customer.last_name, 
    payment.amount, 
    payment.payment_date, 
    payment.staff_id
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
JOIN staff ON payment.staff_id = staff.staff_id
ORDER BY payment.staff_id;