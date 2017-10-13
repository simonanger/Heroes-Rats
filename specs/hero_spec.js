var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");
var Quest = require("../quest");

describe("Customer", function() {
  var hero;
  var food1;
  var food2;
  var quest1;
  var quest2;

  beforeEach(function() {
    hero = new Hero("Cloud Strife", 100, "Cup Noodle");
    food1 = new Food("Ramen", 20);
    food2 = new Food("Cup Noodle", 50);
    quest1 = new Quest("Destroy the Mako Reactor", 3, 1, 100, false);
    quest2 = new Quest("Disable the Security Robot", 4, 2, 100, false);
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
    hero.eat(food1);
    assert.strictEqual(hero.health, 120);
  });

  it("can eat favourite food & replenishmentValue increases by 1.5", function(){
    hero.eat(food2);
    assert.strictEqual(hero.health, 175);
  });

  it("can accept quests", function() {
    hero.acceptQuest(quest1);
    assert.strictEqual(hero.quests.length, 1);
    assert.strictEqual(hero.quests[0].name, "Destroy the Mako Reactor");
  });

  it("can sort quests by urgency", function() {
    hero.acceptQuest(quest2);
    hero.acceptQuest(quest1);
    hero.sortQuests("urgency");
    assert.deepStrictEqual(hero.quests, [quest1, quest2] );
  })

})
