var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");

describe("Customer", function() {
  var hero;
  var food1;
  var food2;

  beforeEach(function() {
    hero = new Hero("Cloud Strife", 100, "Cup Noodle");
    food1 = new Food("Ramen", 20);
    food2 = new Food("Cup Noodle", 50);
  });

  it("has a name", function() {
    assert.strictEqual(hero.name, "Cloud Strife");
  });

  it("has a health value", function() {
    assert.strictEqual(hero.health, 100);
  });

  it("has a favourite food", function() {
    assert.strictEqual(hero.favFood, "Cup Noodle");
  });

  it("can talk", function() {
    assert.strictEqual(hero.talk(), "My name is Cloud Strife!")
  });

  it("has a quest list that starts empty", function() {
    assert.strictEqual(hero.quests.length, 0);
  });

  it("can eat food and health increases", function() {
    assert.strictEqual(hero.health, 100);
    hero.eat(food1);
    assert.strictEqual(hero.health, 120);
  });

  it("can eat favourite food & replenishmentValue increases by 1.5", function(){
    assert.strictEqual(hero.health, 100);
    hero.eat(food2);
    assert.strictEqual(hero.health, 175);
  });

})
