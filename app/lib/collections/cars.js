Cars = new Mongo.Collection('cars');

Cars.attachSchema(new SimpleSchema({
  brand: {
    type: String,
    label: "Brand",
    max: 100
  },
  model: {
    type: String,
    label: "Model",
    max: 100
  },
  fueltype: {
    type: String,
    label: "Fuel Type",
    allowedValues: ['Petrol', 'Diesel', 'Hybrid', 'Electric'],
  },
  bodystyle: {
    type: String,
    label: "Body Style",
    allowedValues: ['Convertible', 'Coupe', 'Hatchback', 'Van', 'Sedan', 'SUV', 'Truck', 'Wagon'],
    optional: true
  },
  topspeed: {
    type: Number,
    label: "Top Speed (mph)",
    optional: true
  },
  power: {
    type: Number,
    label: "Power (hp)",
    optional: true
  }
}));


if (Meteor.isServer) {
  Cars.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  // Cars.deny({
  //   insert: function (userId, doc) {
  //     return true;
  //   },

  //   update: function (userId, doc, fieldNames, modifier) {
  //     return true;
  //   },

  //   remove: function (userId, doc) {
  //     return true;
  //   }
  // });
}

