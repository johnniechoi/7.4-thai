var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var Checkout = require('./checkout.jsx').CheckoutComponent;
var OrderCollection = require('../models/items.js').OrderCollection;


var MenuComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    var orderList = new OrderCollection();
    return {
      orderList: orderList
    }
  },
handleItemClick: function(item){
  // console.log(item.attributes);
  var orderItem = item.toJSON();
  delete orderItem._id
  //this.state.orderList.push(orderListClicked);
  this.state.orderList.add([orderItem]);
  this.setState({ orderList: this.state.orderList });
},

  render: function(){
    var collection = this.getCollection();
      // console.log(collection);
    var listOfDishes = collection.map((item) =>{
      // bound the individual item in the handle instead of the collection.
      var handleItemClick = this.handleItemClick.bind(this, item);
      var dish = item.get('name');
      var description = item.get('description');
      var price = item.get('price')
      return(
      <li key={item.get('_id') || item.cid} className="well menuList" onClick={handleItemClick}>
        <div >
          <p className="menuTitle">{`${dish}`}</p>
          <span> {`${description}`}</span>
          <span className="menuCost"> ${`${price}`}</span>
        </div>
      </li>
      )
    })

    return (
    <div className="">
      <header className="header">
        <div className="logo">
          <img src="https://s-media-cache-ak0.pinimg.com/564x/73/02/7a/73027a78f5288ccf66d6cb524d18fdb0.jpg"></img>
        </div>
        <h1>Majestic Thai</h1>
      </header>
      <div className="image">
      </div>
      <ul className="col-md-8 right">
        {listOfDishes}
      </ul>
      <div className="col-md-4">
        <Checkout orderList={this.state.orderList}/>
      </div>
    </div>
    )
  }
});

module.exports = {
  MenuComponent
};
