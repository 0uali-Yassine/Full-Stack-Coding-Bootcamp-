-- 1 Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE new_film
SET language_id = 2  -- French
WHERE name = 'Inception';

UPDATE new_film
SET language_id = 3  -- Spanish
WHERE name = 'The Matrix';

-- 2 
-- you must provid valid 'store_id' and 'address_id' values that exist in the stor and 'address' tables, respectively.
-- if you attempt to insert a row with invalid 'store_id' or 'address_id' values, the database will reject the operation and return an '''erro'''.

-- 3 We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review; -- No extra checking is needed unless the table is referenced by other database objects

-- 4 
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

-- 5 
SELECT f.title, f.rental_rate
FROM film f
INNER JOIN inventory i ON f.film_id = i.film_id
INNER JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

--6
--6-1
SELECT DISTINCT a.first_name, a.last_name, f.title
FROM film f
INNER JOIN film_actor f_a ON f.film_id = f_a.film_id
INNER JOIN actor a ON f_a.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe' AND f.description LIKE '%sumo wrestler%';
--n'exist pas

--6-2
SELECT title, rating, length
FROM film
WHERE rating = 'R' AND length < 60;

--6-3
SELECT DISTINCT f.title
FROM customer c
INNER JOIN rental r ON c.customer_id = r.customer_id
INNER JOIN inventory i ON r.inventory_id = i.inventory_id
INNER JOIN film f ON i.film_id = f.film_id
INNER JOIN payment p ON c.customer_id = p.customer_id
WHERE r.return_date BETWEEN '2005-07-28' AND '2005-08-01' AND c.first_name = 'Matthew'
AND c.last_name = 'Mahan'  AND p.amount > 4.00;

--6-4
SELECT f.film_id, f.title, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;




