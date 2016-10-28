var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var CheckoutComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();

    this.props.orderList.each(function(order){
      order.save()
    });
  },
  render: function(){
    var CheckoutListing = this.props.orderList.map(function(item){
      var name = item.get('name')
      var price = item.get('price')
      return(
        <li key={item.cid}>{name} {price}</li>
        )
    });

    var TotalPrice = this.props.orderList.reduce(function(acum, item){
      acum += item.get('price')
        return acum;
        }, 0)
    return (
      <ul>
        <h1>Checkout Box</h1>
        <p>{CheckoutListing}</p>
        <p>{TotalPrice}</p>
        <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>

      </ul>
    )
  }
});

module.exports = {
  CheckoutComponent
};
