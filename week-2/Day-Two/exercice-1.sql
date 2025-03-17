-- All items, ordered by price (lowest to highest).
SELECT * FROM items
ORDER BY price 

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items
WHERE price >=80
ORDER BY price DESC

--The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name,last_name from customers
ORDER BY first_name
LIMIT 3

--The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT last_name from customers
ORDER BY last_name DESC