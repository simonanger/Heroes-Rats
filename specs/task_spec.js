var assert = require("assert");
var Task = require("../task");

describe("Task", function() {
  var task;

  beforeEach(function() {
    task = new Task("Destroy the Mako Reactor", 3, 1, 100, false);
  });

  it("has a name", function() {
    assert.strictEqual(task.name, "Destroy the Mako Reactor");
  });

  it("has a difficulty", function() {
    assert.strictEqual(task.difficulty, 3);
  });

  it("has an urgency", function(){
    assert.strictEqual(task.urgency, 1);
  });

  it("has a reward", function(){
    assert.strictEqual(task.reward, 100);
  });

  it("has not been completed", function() {
    assert.strictEqual(task.completed, false);
  });

})
