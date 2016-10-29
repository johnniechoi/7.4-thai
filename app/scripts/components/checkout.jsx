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
      var price = item.get('price');
      return(
        <div key={item.cid} className="listing">{name} <div className="checkoutCost">${price.toFixed(2)}</div></div>
        )
    });

    var TotalPrice = this.props.orderList.reduce(function(acum, item){
      acum += item.get('price')
        return acum;
        }, 0)
    return (
      <ul>
        <h1>Checkout Box</h1>
        <ul>{CheckoutListing}</ul>
        <div className="totalCost row">Total: ${TotalPrice.toFixed(2)}</div>
        <div className="buttondiv">
          <button type="submit" className="button tick" onClick={this.handleSubmit}></button>
        </div>
      </ul>
    )
  }
});

module.exports = {
  CheckoutComponent
};
