var Backbone = require('backbone');
var $ = require('jquery');

var Dish = Backbone.Model.extend({
  idAttribute: '_id'
});

var DishCollection = Backbone.Collection.extend({
  model: Dish,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/thaifood',
});

var Order = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/thaifoodorder',
})

module.exports = {
  Dish: Dish,
  DishCollection: DishCollection,
  Order: Order,
  OrderCollection: OrderCollection
};
