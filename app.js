/**
 * BUDGET CONTROLLER
 */
var budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };

  return {
      addItem: function(type, des, val) {
          var newItem, ID;

          ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

          if(type === "exp"){
              newItem = new Expense(ID, des, val)
          } else if(type === "inc") {
              newItem = new Income(ID, des, val);
          }

          data.allItems[type].push(newItem);
          return newItem;
      }
  }

})();


/**
 * UI CONTROLLER
 */
var UIController = (function () {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value,
      };
    },

    getDomStrings: function () {
      return DOMStrings;
    },
  };
})();

/**
 * GLOBAL APP CONTROLLER
 */
var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function () {

    var DOM = UICtrl.getDomStrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (event) {
      // 'which' is used for older browser
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    // 1. Get the field input data
    var input = UICtrl.getInput();
    // 2. Add the Item to the budget controller
    // 3. Add the item to the  UI
    // 4. Display the budget on the UI
    // Keypress happens at the global document.
  };

  return {
    init: function () {
      console.log("Application has started!");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
