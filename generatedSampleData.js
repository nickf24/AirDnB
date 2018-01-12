const dataGenerator = require('./client/dist/sampleData/data_generator.js');

var listings = [];
dataGenerator.Generator(listings);

module.exports.listingsData = listings;