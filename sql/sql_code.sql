-- psql -d boardgame_dev < sql/sql_code.sql

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS boardgames;
DROP TABLE IF EXISTS players;

-- Task 2a
CREATE TABLE boardgames (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL UNIQUE,
    avg_rating NUMERIC(3, 2) NOT NULL, -- 1.22, 10.8, 100, NOT: 40.76, 5.5555 00002.22
    max_players INTEGER NOT NULL,
    category VARCHAR(50)
);

-- Task 2b
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    fave_category VARCHAR(50)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    boardgame_id INTEGER REFERENCES boardgames (id),
    -- boardgame_id INTEGER,
    -- FOREIGN KEY (boardgame_id) REFERENCES boardgames (id)
    content TEXT
);

ALTER TABLE players ADD COLUMN prefers_video_games BOOLEAN DEFAULT false;

-- Task 3
INSERT INTO boardgames (name, avg_rating, max_players, category)
VALUES
    ('Gloomhaven', 8.8, 4, 'Adventure'),
    ('Pandemic Legacy: Season 1', 8.62, 4, 'Cooperative'),
    ('Brass: Birmingham', 8.66, 4, 'Economic'),
    ('Terraforming Mars', 8.43, 5, 'Economic'),
    ('Twilight Imperium: Fourth Edition', 8.7, 6, 'Strategy'),
    ('Spirit Island', 8.34, 4, 'Cooperative'),
    ('Mage Knight', 8.1, 4, 'Adventure'),
    ('Rising Sun', 7.88, 5, 'Strategy');

INSERT INTO players (name, fave_category, prefers_video_games)
VALUES
    ('Alec', 'Strategy', false),
    ('Dan', 'Cooperative', DEFAULT),
    ('Ray', 'Adventure', true),
    ('Nate', 'Economic', DEFAULT),
    ('Shane', 'Strategy', DEFAULT),
    ('Geoff', 'Economic', DEFAULT);

INSERT INTO reviews (content, boardgame_id)
VALUES
    ('There is nothing I love more than escaping one pandemic for another, 10/10', 2),
    ('This game is far too long!', 5),
    ('My friends and I really love this game, lots of replayability', 6),
    ('I can be a space pirate, favorite game hands down.', 5);

-- Task 4a
-- SELECT * FROM boardgames;

-- Task 4b
-- SELECT name, category FROM boardgames;

-- Task 4c
-- SELECT * FROM boardgames
-- WHERE category = 'Adventure';

-- Task 4d
-- SELECT * 
-- FROM boardgames
-- WHERE avg_rating BETWEEN 8.0 AND 8.5;

-- Task 4e
-- SELECT *
-- FROM boardgames
-- WHERE max_players >= 5;

-- Task 4f
-- SELECT * 
-- FROM boardgames
-- WHERE category IN ('Adventure', 'Economic');

-- Task 4g
-- SELECT * FROM reviews
-- WHERE content ILIKE 'th%';

-- Task 4h
-- SELECT name, (avg_rating * 1.0) AS percentage
-- FROM boardgames
-- WHERE category = 'Strategy';

-- SELECT name FROM players
-- ORDER BY name DESC
-- LIMIT 1;