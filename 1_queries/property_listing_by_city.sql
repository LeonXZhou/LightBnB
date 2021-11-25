SELECT properties.id, 
  title, 
  cost_per_night, 
  AVG(property_reviews.rating) AS average_rating
FROM properties
INNER JOIN property_reviews ON property_reviews.property_id = properties.id
WHERE city = 'Vancouver'
GROUP BY properties.id, title, cost_per_night
HAVING AVG(property_reviews.rating) >= 4
LIMIT 10;