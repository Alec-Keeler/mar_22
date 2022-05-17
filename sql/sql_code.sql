DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS boardgames;
DROP TABLE IF EXISTS players;

CREATE TABLE boardgames (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    avg_rating NUMERIC(3, 2),
    max_players INTEGER,
    category VARCHAR(50)
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    fave_category VARCHAR(255)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    content TEXT,
    -- foreign key method 1
    boardgame_id INT REFERENCES boardgames(id)
    -- foreign key method 2
    -- boardgame_id INT,
    -- FOREIGN KEY (boardgame_id) REFERENCES boardgames
);

ALTER TABLE players ADD COLUMN prefers_video_games boolean default false;

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
    ('Alec', 'Strategy', DEFAULT),
    ('Dan', 'Cooperative', DEFAULT),
    ('Ray', 'Adventure', DEFAULT),
    ('Rawaha', 'Economic', true),
    ('Autumn', 'Strategy', DEFAULT),
    ('Javier', 'Economic', DEFAULT);

    INSERT INTO reviews (content, boardgame_id)
VALUES
    ('There is nothing I love more than escaping one pandemic for another, 10/10', 2),
    ('This game is far too long!', 5),
    ('My friends and I really like this game, lots of replayability', 6),
    ('I can be a space pirate, favorite game hands down.', 5);

UPDATE boardgames
SET name = name || ' (Game of the Year!)'
WHERE avg_rating >= 8.70;