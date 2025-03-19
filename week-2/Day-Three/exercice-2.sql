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