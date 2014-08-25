/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store.js');
var RemoveFromCart = require('../components/app-removefromcart.js');
var Increase = require('../components/app-increase.js');
var Decrease = require('../components/app-decrease.js');

function cartItems(){
  return {items: AppStore.getCart()}  // retrieves data from AppStore
}

var Cart = React.createClass({
  getInitialState:function(){
    return cartItems();
  },

  componentWillMount:function(){
    // listens to "change" events emitted by AppStore after it receives a
    // payload from AppDispatcher. Cart then retrieves data from AppStore
    // and updates itself and any children by calling render(), setState(),
    // or forceUpdate().
    AppStore.addChangeListener(this._onChange)
  },

  _onChange:function(){
    this.setState(cartItems())
  },

  render:function(){
    var total=0;
    var items = this.state.items.map(function(item, i){
      var subtotal = item.cost*item.qty;
      total+=subtotal;

      return (
        <tr key={i}>
          <td><RemoveFromCart index={i} /></td>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>
            <Increase index={i} />
            <Decrease index={i} />
          </td>
          <td>${subtotal}</td>
        </tr>
      )
    })

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Qty</th>
            <th></th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right">Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    )
  }
});

module.exports = Cart;