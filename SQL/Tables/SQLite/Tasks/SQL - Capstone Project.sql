-- Create Foods table
CREATE TABLE IF NOT EXISTS Foods (
    food_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    calories INTEGER,
    price REAL
);

-- Insert sample data with soapppp
INSERT INTO Foods (name, category, calories, price)
VALUES 
('Burger', 'Fast Food', 500, 75.00),
('Salad', 'Healthy', 150, 50.00),
('Pasta', 'Italian', 350, 90.00),
('Sushi', 'Japanese', 200, 120.00),
('Pizza', 'Italian', 400, 85.00),
('Soap', NULL, 180, 40.00);
-- YES SOAP, IT'S A FOOD ITEM IN THIS CONTEXT!!!!! (hope the teacher laughs)

-- Queries using Capstone operators

-- 1. Find foods where category is NULL
SELECT name, category 
FROM Foods
WHERE category IS NULL;

-- 2. Find foods where category is NOT NULL
SELECT name, category 
FROM Foods
WHERE category IS NOT NULL;

-- 3. Find foods with calories BETWEEN 200 AND 400
SELECT name, calories 
FROM Foods
WHERE calories BETWEEN 200 AND 400;

-- 4. Aggregate: average price per category
SELECT category, AVG(price) AS avg_price
FROM Foods
WHERE category IS NOT NULL
GROUP BY category;

-- 5. Aggregate: count foods per category
SELECT category, COUNT(*) AS total_items
FROM Foods
GROUP BY category;

-- 6. Filtered report: show foods with price BETWEEN 50 AND 100
SELECT name, price
FROM Foods
WHERE price BETWEEN 50 AND 100
ORDER BY price ASC;
