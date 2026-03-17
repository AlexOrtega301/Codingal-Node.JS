-- Create the table of foods 
CREATE TABLE Foods (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    calories INTEGER,
    price REAL
);

-- Insert sample data WITH FOODDDDDDS!!!
INSERT INTO Foods (name, category, calories, price)
VALUES ('Burger', 'Fast Food', 500, 75.00);

INSERT INTO Foods (name, category, calories, price)
VALUES ('Salad', 'Healthy', 150, 50.00);

INSERT INTO Foods (name, category, calories, price)
VALUES ('Pasta', 'Italian', 350, 90.00);

INSERT INTO Foods (name, category, calories, price)
VALUES ('Sushi', 'Japanese', 200, 120.00);

INSERT INTO Foods (name, category, calories, price)
VALUES ('Pizza', 'Italian', 400, 85.00);

-- Aggregate Functions examples

-- 1. Count how many foods are in the table
SELECT COUNT(*) AS total_foods
FROM Foods;

-- 2. Find the average calories of all foods
SELECT AVG(calories) AS avg_calories
FROM Foods;

-- 3. Find the maximum price
SELECT MAX(price) AS max_price
FROM Foods;

-- 4. Find the minimum calories
SELECT MIN(calories) AS min_calories
FROM Foods;

-- 5. Group by category and calculate average price
SELECT category, AVG(price) AS avg_price
FROM Foods
GROUP BY category;

-- 6. Group by category and count items
SELECT category, COUNT(*) AS items_per_category
FROM Foods
GROUP BY category;
