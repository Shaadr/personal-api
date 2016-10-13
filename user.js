var user = {
  name: 'Mike',
  location: 'Provo, UT',
  occupations: ['missionary', 'bestbuy', 'pharmacy', 'student'],
  hobbies: [
    {
      name: 'Reading',
      type: 'recreation'
    },
    {
      name: 'coding',
      type: 'professional'
    },
    {
      name: 'gaming',
      type: 'recreation'
    }
  ],
  family: [
    {
      name: 'Jordan',
      relation: 'wife',
      gender: 'female'
    },
    {
      name: 'Jana',
      relation: 'mother',
      gender: 'female'
    },{
      name: 'Paul',
      relation: 'father',
      gender: 'male'
    }
  ],
  restaurants: [
    {
      name: 'Street Tacos',
      type: 'StreetFood',
      rating: '7'
    },
    {
      name: 'Outback Steakhouse',
      type: 'Steak Restaurant',
      rating: '9'
    },
    {
      name: 'Sallys',
      type: 'Thai Food Bus',
      rating: '8'
    },
    {
      name: 'home',
      type: 'home-made',
      rating: '1'
    }
  ]
}

module.exports = user;
