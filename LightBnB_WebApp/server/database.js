const properties = require('./json/properties.json');
const users = require('./json/users.json');

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});


/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  return pool
    .query(`select * 
    from users 
    where users.email = $1`,
      [email])
    .then((result) => {
      console.log(result.rows[0])
      return result.rows[0]
    })
    .catch((err) => err.message);
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */

// 30 | Edgar Harrison | keiragates@ymail.com | $2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.


const getUserWithId = function (id) {
  return pool
    .query(`select * 
        from users 
        where users.id = $1`,
      [id])
    .then((result) => {
      console.log(result.rows[0])
      return result.rows[0]
    })
    .catch((err) => err.message);
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {
  return pool
    .query(`INSERT INTO users
            (name, email, password)
            VALUES ($1, $2, $3)`, [user.name, user.email, user.password])
    .then((result) => {
      return pool
        .query(`select * 
                  from users 
                  where users.name = $1 and users.email = $2 and users.password = $3 `,[user.name, user.email, user.password])
        .then((result) => {
          console.log(result.rows[0])
          return result.rows[0]
        })
        .catch((err) => err.message);
    })
    .catch((err) => err.message);
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function (guest_id, limit = 10) {
  return pool
  .query(`select * 
      from reservations
      where guest_id = $1
      limit $2`,
    [guest_id,limit])
  .then((result) => {
    console.log(result.rows[0])
    return result.rows[0]
  })
  .catch((err) => err.message);

  return getAllProperties(null, 2);
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function (options, limit = 10) {
  return pool
    .query(`select * 
      from properties 
      limit $1`,
      [limit])
    .then((result) => result.rows)
    .catch((err) => err.message);
};
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;