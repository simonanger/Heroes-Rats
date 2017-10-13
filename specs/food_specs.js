var assert = require("assert");
var Food = require("../food");

describe("Food", function() {
  var food;

  beforeEach(function() {
    food = new Food("Ramen", 20);
  });

  it("has a name", function(){
    assert.strictEqual(food.name, "Ramen");
  });

  it("has a replenishment value", function(){
    assert.strictEqual(food.replenishmentValue, 20);
  });
})
