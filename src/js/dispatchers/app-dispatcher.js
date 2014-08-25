var Dispatcher = require('./dispatcher.js');
var merge = require('react/lib/merge');

var AppDispatcher = merge(Dispatcher.prototype, {
  handleViewAction: function(action) {
    this.dispatch({  // dispatches a payload contained in the actions to all stores
      source: 'VIEW_ACTION',
      action: action  // from AppActions; { actionType: AppConstants.ADD_ITEM, item: item }
    })
  }
});

module.exports = AppDispatcher;