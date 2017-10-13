var assert = require("assert");
var Weapon = require("../weapon");

describe("weapon", function() {
  var weapon;

  beforeEach(function() {
    weapon = new Weapon("Buster Sword", 50);
  });

  it("has a name", function() {
    assert.strictEqual(weapon.name, "Buster Sword");
  });

  it("has an attack value", function() {
    assert.strictEqual(weapon.attackValue, 50);
  });

})
