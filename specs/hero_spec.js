var assert = require("assert");
var Hero = require("../hero");

describe("Customer", function() {
  var hero;

  beforeEach(function() {
    hero = new Hero("Cloud Strife", 100, "Cup Noodle");
  });

  it("has a name", function() {
    assert.strictEqual(hero.name, "Cloud Strife");
  });

  it("has a health value", function() {
    assert.strictEqual(hero.health, 100);
  });

})
