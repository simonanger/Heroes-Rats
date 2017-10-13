var assert = require("assert");
var Quest = require("../quest");

describe("quest", function() {
  var quest;

  beforeEach(function() {
    quest = new Quest("Destroy the Mako Reactor", 3, 1, 100, false);
  });

  it("has a name", function() {
    assert.strictEqual(quest.name, "Destroy the Mako Reactor");
  });

  it("has a difficulty", function() {
    assert.strictEqual(quest.difficulty, 3);
  });

  it("has an urgency", function(){
    assert.strictEqual(quest.urgency, 1);
  });

  it("has a reward", function(){
    assert.strictEqual(quest.reward, 100);
  });

  it("has not been completed", function() {
    assert.strictEqual(quest.completed, false);
  });

})
