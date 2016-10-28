var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var CheckoutComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  totalPrice: function(){

  },
  handleChange: function(){

  },

  render: function(){
    var CheckoutListing = this.props.orderList.map(function(item){
      var name = item.get('name')
      var price = item.get('price')
      return(
        <li key={item.cid}>{name} {price}</li>
        )
    })
    return (
      <ul>
        <h1>Checkout Box</h1>
        {CheckoutListing}
      </ul>
    )
  }
});

module.exports = {
  CheckoutComponent
};
