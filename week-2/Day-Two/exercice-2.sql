--In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT* FROM customer

--Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customer;