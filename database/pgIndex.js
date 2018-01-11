const { Pool, Client } = require('pg');
var parse = require('pg-connection-string').parse;
var config = parse('postgres://localhost/airdnb');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'airdnb',
  password: 'password'
})

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'airdnb',
  password: 'password'
})

client.connect();

client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, complete BOOLEAN)', (err, results) => {
  if (err) {
  	console.log(err);
  } else {
  	console.log(results);
  }
  client.end()
})
