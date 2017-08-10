(function () {
'use strict';

// List of "to buy items
var itemsToBuy = [
  {
    name: "Cookies",
    quantity: 10
  },
  {
    name: "Donuts",
    quantity: 7
  },
  {
    name: "Milk",
    quantity: 4
  },
  {
    name: "Chocolate",
    quantity: 6
  },
  {
    name: "Peanut Butter",
    quantity: 1
  },
  {
    name: "Pepto Bismol",
    quantity: 9
  }
];

var alreadyBought = [];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemsToBuyList = this;

  itemsToBuyList.items = itemsToBuy;

  itemsToBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buy(itemIndex);
  }

  itemsToBuyList.isEmpty = function () {
    return itemsToBuy.length == 0;
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = alreadyBought;

  alreadyBoughtList.isEmpty = function () {
    return alreadyBought.length == 0;
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  service.buy = function (itemIdex) {
    alreadyBought.push(itemsToBuy[itemIdex]);
    itemsToBuy.splice(itemIdex, 1);
  };

}

})();
