SELECT properties.id, 
  properties.title, 
  properties.cost_per_night,
  reservations.start_date,
  AVG(property_reviews.rating) as average_rating
From properties
inner join reservations on reservations.property_id = properties.id
inner join property_reviews on property_reviews.property_id = properties.id
inner join users on users.id = reservations.guest_id
where users.id = 1 and reservations.end_date < now()::date
group by properties.id, properties.title, properties.cost_per_night, reservations.start_date;