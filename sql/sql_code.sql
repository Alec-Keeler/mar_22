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