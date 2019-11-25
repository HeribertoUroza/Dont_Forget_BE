DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS list_item;

CREATE TABLE users 
(
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE
);

CREATE TABLE groups 
(
    group_id SERIAL PRIMARY KEY,
    group_name VARCHAR
);

CREATE TABLE category 
(
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR,
    FOREIGN KEY (group_id) REFERENCES groups(group_id)
);

CREATE TABLE list_item 
(
    list_item_id SERIAL PRIMARY KEY,
    list_item_name VARCHAR,
    is_completed false,
    FOREIGN KEY (category_id) REFERENCES category(category_id),
    createdAt TIMESTAMP DEFAULT NOW() 
);