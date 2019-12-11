DROP DATABASE IF EXISTS dont_forget;
CREATE DATABASE dont_forget;

\c dont_forget;

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

CREATE TABLE categories
(
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR,
    group_id INT NOT NULL,
    FOREIGN KEY (group_id)
    REFERENCES groups(group_id)
);

CREATE TABLE list_items
(
    list_item_id SERIAL PRIMARY KEY,
    list_item_name VARCHAR,
    category_id INT NOT NULL,
    is_completed BOOLEAN NOT NULL,
    is_completed_by INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (is_completed_by) REFERENCES users(user_id),
    createdAt TIMESTAMP DEFAULT NOW() 
);

INSERT INTO users
    (full_name, email)
VALUES
    ('Heriberto Uroza', 'huroza@email.com'),
    ('Name #2', 'Name2@email.com'),
    ('Name #3', 'Name3@email.com');

INSERT INTO groups
    (group_name)
VALUES
    ('Group1'),
    ('Group2'),
    ('Group3');

INSERT INTO categories
    (category_name, group_id)
VALUES
    ('Grocery List', 1),
    ('Laundry List', 1),
    ('Medicine List', 2),
    ('Ice Cream List', 3),
    ('Laundry List', 3);

INSERT INTO list_items
    (list_item_name,category_id,is_completed, is_completed_by)
VALUES
    ('Milk', 1, 'FALSE', 1),
    ('Eggs', 1, 'TRUE', 2),
    ('Shirts', 2, 'FALSE', 3),
    ('Pain Reliver', 3, 'FALSE', 1),
    ('Mango', 4, 'TRUE', 1),
    ('Coffee', 4, 'TRUE', 2),
    ('Chocolate', 4, 'FALSE', 3);
