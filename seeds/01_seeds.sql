INSERT INTO users (name, email, password) VALUES 
  ('George Galligher', 'GG@GG.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
  ('Mickey Mouse', 'BigMick@disney.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
  ('Michael Nicholas', 'MN@twofirstnames.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');

INSERT INTO properties(owner_id,title,description,thumbnail_photo_url,cover_photo_url,cost_per_night,parking_spaces,number_of_bathrooms,number_of_bedrooms,country,street,city,province,post_code) VALUES
  (1,'Small Hotel', 'a very small hotel', 'smallhotel.com','smallhotel.com', '30', '2', '10','100','smallcountry','smallstreet','smallville','smallitia','SML 222'),
  (2,'Dinky Shack', 'The most cosy dinky shack ever!!!! <3', 'dinkshack.com','dinky.com', '30', '2', '1','1','MURICA','New York st','kansas','texas','USA USA'),
  (3,'Your Parents Basement', 'When rent is too expensive', 'rents.com','housingcrisisbigsad.com', '30', '2', '1','1','Canada','expensive st','Vancouver','BC','A2A 1M1');


INSERT INTO reservations(start_date, end_date, property_id, guest_id) VALUES
  ('January 20 2020','April 30 2021','1','1'),
  ('March 20 2021','April 30 2021','2','2'),
  ('June 20 2020','December 30 2021','3','3');

INSERT INTO property_reviews (guest_id,property_id,reservation_id,rating,message) VALUES
  (1,1,1,4,'would stay again'),
  (2,2,2,0,'too dinky'),
  (3,3,3,5,'thanks ma and pa!');
