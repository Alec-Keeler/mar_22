-- psql -d boardgame_dev < sql/sql_code.sql
DROP TABLE IF EXISTS lfg;
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

-- Task 5a
-- UPDATE players
-- SET prefers_video_games = true
-- WHERE name IN ('Alec', 'Geoff');

-- Task 5b
-- DELETE FROM boardgames
-- WHERE avg_rating < 8.3;

-- Task 6a
-- SELECT *
-- FROM boardgames
-- JOIN reviews ON (boardgames.id = reviews.boardgame_id)
-- WHERE boardgames.id = 5;

CREATE TABLE lfg (
    id SERIAL PRIMARY KEY,
    player_id INTEGER,
    game_id INTEGER,
    FOREIGN KEY (game_id) REFERENCES boardgames (id),
    FOREIGN KEY (player_id) REFERENCES players (id)
);

INSERT INTO lfg (player_id, game_id)
VALUES
    (1, 5),
    (1, 2),
    (3, 1),
    (5, 5),
    (2, 2),
    (4, 4),
    (6, 4),
    (1, 4);

-- SELECT boardgames.name, boardgames.id, lfg.game_id, lfg.player_id, players.id, players.name 
-- FROM boardgames
-- JOIN lfg ON (boardgames.id = lfg.game_id)
-- JOIN players ON (lfg.player_id = players.id)
-- WHERE boardgames.name = 'Terraforming Mars';

-- Find the boardgame names with reviews containing a search term

-- SELECT boardgames.name FROM boardgames
-- WHERE boardgames.id IN (
--     SELECT boardgame_id FROM reviews
--     WHERE content ILIKE 't%'
-- );

-- Find player names of all players who want to play Terraforming Mars

-- SELECT players.name FROM players
-- WHERE players.id IN (
--     SELECT lfg.player_id FROM lfg
--     WHERE lfg.game_id = (
--         SELECT boardgames.id FROM boardgames
--         WHERE boardgames.name = 'Terraforming Mars'
--     )
-- );

-- Find all boardgame names of the category a player has selected as their 
-- favorite using their player name

SELECT boardgames.category, boardgames.name FROM boardgames
WHERE boardgames.category = (
    SELECT players.fave_category FROM players
    WHERE players.name = 'Ray'
);
