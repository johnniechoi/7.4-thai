//outside require
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//local require
var Menu = require('./components/menu.jsx').MenuComponent;
var Checkout = require('./components/checkout.jsx').CheckoutComponent;
var DishCollection = require('./models/items.js').DishCollection;


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function(){
    var collection = new DishCollection({ collection });
    collection.fetch();

      // console.log(collection);
    ReactDOM.render(
      React.createElement(Menu, { collection }),
      document.getElementById('app')
    )
  }
  



});

var router = new AppRouter();

module.exports = router;
