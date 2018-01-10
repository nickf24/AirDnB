const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
//-----------------
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connected');
})

let userSchema = mongoose.Schema({
  id: Number,
  userName: String,
  password: String,
  listings: [{
    price: 133,
    listing_id: Number
    reserved_dates: Array, //tuple of dates i.e [[1/9/18, 1/12/18], ...]
    imageURL: Array,
    summary: String,
    street: String,
    city: String,
    state: String,
    rating: Number, 
    private: Boolean, //private home or not
    typeHome: String, //apartment, home, tent, RV
    bedrooms: Number,
    bathrooms: Number,
    guests: Number,
    description: String,
    amenities: [{body: String}, //might not be necessary. 
          {wifi: Boolean},
          {kitchen: Boolean},
          {parking: Boolean},
          {pool: Boolean}
          {gym: Boolean}],
    house_rules: Array,
    cancellations: String,
    lat: Number,
    lon: Number,
    comments: [{body : String},
           {date: Date}]
  }],

  reservations: [{
    listing_id: Number
    start_date: Date,
    end_date: Date,
  }]
})

let alternativeUserSchema = mongoose.Schema({
  id: Number,          
  user: String, 
  password: String      
  listing_id: Number,     
  reservation_id: Number,     
});

let listingSchema = mongoose.Schema({
  listing_id: Number
  user_id: Number,
  reservered_dates: Array, //tuple of dates i.e [[1/9/18, 1/12/18], ...]
  imageURL: Array,
  Address: String,
  rating: Number,
  bedrooms: Number,
  bathrooms: Number,
  guests: Number,
  amenities: String,
  house_rules: String,
              //possible latitude/longitude for map
})
let reservationSchema = mongoose.Schema({
  user_id: Number,
  listing_id: Number
  start_date: Date,
  end_date: Date,
})

let User = mongoose.model('User', userSchema);
let Listing = mongoose.model('Listing', listingSchema);
let Reservation = mongoose.model('Reservation', reservationSchema);