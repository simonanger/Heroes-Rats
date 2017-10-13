var assert = require("assert");
var Enemy = require("../enemy");

describe("enemy", function(){
  var enemy;

  beforeEach(function() {
    enemy = new Enemy("Sephiroth", 200, 75);
  });

  it("has a name", function() {
    assert.strictEqual(enemy.name, "Sephiroth");
  });

  it("has a health value", function() {
    assert.strictEqual(enemy.health, 200);
  });

  it("has an attack value", function() {
    assert.strictEqual(enemy.attackValue, 75);
  });

})
