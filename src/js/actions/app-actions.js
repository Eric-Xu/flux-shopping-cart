var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');


// AppActions is a collection of action creator methods that views may call from
// within their event handlers, in response to user interactions. They are nothing
//  more than helpers that call into the AppDispatcher.

var AppActions = {

  // Flux calls these helper methods "action creators". They are simply discrete,
  // semantic helper functions that facilitate passing data to the dispatcher in
  // the form of an action. They can be invoked from within our views' event handlers,
  // so we can call it in response to a user interaction.

  addItem:function(item){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_ITEM,
      item: item
    })
  },
  removeItem:function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_ITEM,
      index: index
    })
  },
  decreaseItem:function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DECREASE_ITEM,
      index: index
    })
  },
  increaseItem:function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INCREASE_ITEM,
      index: index
    })
  }
}

module.exports = AppActions;