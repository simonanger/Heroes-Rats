var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");
var Quest = require("../quest");
var Weapon = require("../weapon");

describe("Customer", function() {
  var hero;
  var food1;
  var food2;
  var quest1;
  var quest2;
  var weapon1;

  beforeEach(function() {
    hero = new Hero("Cloud Strife", 100, "Cup Noodle");
    food1 = new Food("Ramen", 20);
    food2 = new Food("Cup Noodle", 50);
    quest1 = new Quest("Destroy the Mako Reactor", 3, 1, 100, false);
    quest2 = new Quest("Disable the Security Robot", 4, 2, 100, false);
    weapon1 = new Weapon("Buster Sword", 50);
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

  it("has a completed quest list that starts empty", function() {
    assert.strictEqual(hero.completedQuests.length, 0);
  });

  it("has a weapons list that starts empty", function() {
    assert.strictEqual(hero.weapons.length, 0);
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
  });

  it("can complete quests and they remove from quest list", function() {
    hero.acceptQuest(quest1);
    hero.acceptQuest(quest2);
    hero.completeQuest(quest1);
    assert.strictEqual(hero.completedQuests.length, 1);
    assert.strictEqual(hero.completedQuests[0].name, "Destroy the Mako Reactor");
    assert.strictEqual(hero.quests.length, 1);
  });

  it("can get a weapon", function() {
    hero.getWeapon(weapon1);
    assert.strictEqual(hero.weapons.length, 1);
    assert.strictEqual(hero.weapons[0].name, "Buster Sword");
  });

})
