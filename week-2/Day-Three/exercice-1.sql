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
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,  
    name VARCHAR(255) NOT NULL 
);

INSERT INTO new_film (name) VALUES
('Old Boy'),
('Inception'),
('Se7en'),
('The Matrix'),
('The Dark Knight');


-- 5 Create a new table called customer_review,...
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY, 
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,  
    language_id INT REFERENCES language(language_id) ON DELETE CASCADE,  
    title VARCHAR(255) NOT NULL,  
    score INT,  
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Automatically set to current timestamp
);

-- 6 Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'A gripping revenge story!', 9, 'Old Boy is a masterpiece of storytelling and suspense. The twists are unforgettable!'),
(2, 1, 'Mind-bending brilliance', 10, 'Inception is a cinematic masterpiece that challenges the mind. Christopher Nolan at his best!');

-- 7 Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id = 1; --  automatically delete  associated reviews
