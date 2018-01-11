const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'airdnb',
  password: 'password'
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'airdnb',
  password: 'password'
})

client.connect();

let createUsers = `CREATE TABLE users (
  id SERIAL,
  username TEXT,
  password TEXT,
  PRIMARY KEY (id)	
)`

let createListings = `CREATE TABLE listings (

  id SERIAL,
  name TEXT, 
  price NUMERIC,
  images TEXT ARRAY,
  summary TEXT,
  street TEXT,
  city TEXT,
  reserved_dates DATE ARRAY,
  state TEXT,
  rating INTEGER,
  private BOOLEAN,
  typehome TEXT,
  bedrooms INTEGER,
  bathrooms INTEGER,
  description TEXT,
  wifi BOOLEAN,
  kitchen BOOLEAN,
  parking BOOLEAN,
  pool BOOLEAN,
  gym BOOLEAN,
  house_rules TEXT ARRAY,
  cancellations TEXT,
  lat NUMERIC,
  lon NUMERIC,
  comments TEXT ARRAY,
  PRIMARY KEY (id)

)`

let createReservations = `CREATE TABLE reservations (

  id SERIAL,
  user_id SERIAL references users(id),
  listing_id SERIAL references listings(id),
  days_reserved DATE ARRAY

)`


// client.query(createUsers, (err, res) => {
//   if (err) {
//     console.log(err);
//   }
// })


// client.query(createListings, (err, res) => {
//   if (err) {
//     console.log(err);
//   }
// })


// client.query(createReservations, (err, res) => {
//   if (err) {
//     console.log(err);
//   } 
  
// })

var queryStr = `INSERT INTO listings (name, price, description, street, city) VALUES ('A wahroonga to stay', 20000, 'Lovely Leafy Place', 'Wahroonga Ave', 'Sydney')` 
client.query(queryStr, (err, res) => {
  if (err) {
    console.log(err);
  }
  client.end();
})


let saveListing = function(params, callback) {
  // saves a new listing to the DB
  // expects params to be an obj with the required params
  var queryStr = `INSERT INTO listings VALUES ('A wahroonga to stay', 20000, ['image1.url', 'image2.url'], 'Lovely Leafy Place', 'Wahroonga Ave', 'Sydney')`
  // var queryStr = `INSERT INTO listings VALUES (${results.name}, ${results.price}, ${results.images}, ${results.summary}, ${results.street}, ${results.city})`
  client.query(queryStr, (err, res) => {
  	if (err) {
  	  callback(err, null);
  	} else {
      callback(null, res);
  	}
  });
}







module.exports.saveListing = saveListing;



// var parse = require('pg-connection-string').parse;
// var config = parse('postgres://localhost/airdnb');