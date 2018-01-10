var data = [
  {
    id: 1,
    userName: 'FlyingMongeese',
    password: 'flysouth',

    listings: [{
      listing_id: 1,
      reserved_dates: [], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      imageURL: [],
      Street: '123 Circle St.',
      City: 'San Francisco',
      State: 'CA',
      rating: 4,
      private: true, //private home or not
      typeHome: 'home', //apartment, home, tent, RV
      bedrooms: 2,
      bathrooms: 1,
      guests: 4,
      amenities: [{body: null}, //might not be necessary. 
            {wifi: true},
            {kitchen: true},
            {parking: false},
            {pool: false}
            ],
      house_rules: 'No honey badgers allowed please',
      cancellations: 'For cancellations, please notify us 1 week in advance.',
      lat: null,
      lon: null,
      comments: [{user: {id: 2,
                        username: 'Prism Nick'}},
                 {body: 'Perfect place to make prisms!' },
                 {date: '01-01-2018'}]
    }]
  },
  {
    id: 2,
    userName: 'Prism Nick',
    password: 'prisms',

    listings: [{
      listing_id: 2,
      reserved_dates: [], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      imageURL: [],
      Street: '2845 Prismatic Ave.',
      City: 'Oakland',
      State: 'CA',
      rating: 9, 
      private: false, //private home or not
      typeHome: 'apartment', //apartment, home, tent, RV
      bedrooms: 1,
      bathrooms: 1,
      guests: 2,
      amenities: [{body: null}, //might not be necessary. 
                  {wifi: true},
                  {kitchen: true},
                  {parking: true},
                  {pool: true} ],
      house_rules: 'Please do not touch my prism collection. They are very special to me.',
      cancellations: 'Cancel...and I will charge you.',
      lat: null,
      lon: null,
      comments: [{user: {id: 2,
                         username: 'D-Dizzle'}},
                 {body: 'Wifi kinda sucks.' },
                 {date: '011-01-2017'}]
    }]
  },
  {
    id: 3,
    userName: 'D-Dizzle',
    password: 'dizzledazzle',

    listings: [{
      listing_id: 3,
      reserved_dates: [], //tuple of dates i.e [[1/9/18, 1/12/18], ...]
      imageURL: [],
      Street: '5489 Mission Blvd.',
      City: 'San Francisco',
      State: 'CA',
      rating: 7, 
      private: true, //private home or not
      typeHome: 'apartment', //apartment, home, tent, RV
      bedrooms: 3,
      bathrooms: 2,
      guests: 6,
      amenities: [{body: null}, //might not be necessary. 
                  {wifi: true},
                  {kitchen: true},
                  {parking: false},
                  {pool: false} ],
      house_rules: 'Don\'t die in my house please',
      cancellations: 'Just don\'t',
      lat: null,
      lon: null,
      comments: [{user: {id: 1,
                         username: 'FlyingMongeese'}},
                 {body: 'Partied here last week with Prism Nick. Amazing.' },
                 {date: '01-01-2018'}]
    }]
  }
];

export default data;