-- Create Foods table
CREATE TABLE Foods (
    food_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    calories INTEGER,
    price REAL
);

-- Insert sample data
INSERT INTO Foods (name, category, calories, price)
VALUES 
('Burger', 'Fast Food', 500, 75.00),
('Salad', 'Healthy', 150, 50.00),
('Pasta', 'Italian', 350, 90.00),
('Sushi', 'Japanese', 200, 120.00),
('Pizza', 'Italian', 400, 85.00),
('Soup', 'Healthy', 180, 40.00),
('Sandwich', 'Fast Food', 300, 55.00);

-- 1. Group by category and calculate average calories
SELECT category, AVG(calories) AS avg_calories
FROM Foods
GROUP BY category;

-- 2. Group by category and count how many foods
SELECT category, COUNT(*) AS total_items
FROM Foods
GROUP BY category;

-- 3. Group by category and show only those with more than 1 item
SELECT category, COUNT(*) AS total_items
FROM Foods
GROUP BY category
HAVING COUNT(*) > 1;

-- 4. Group by category and show average price, but only categories with avg_price > 70
SELECT category, AVG(price) AS avg_price
FROM Foods
GROUP BY category
HAVING AVG(price) > 70;
