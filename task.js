var Task = function(name, difficulty, urgency, reward, completed ) {
  this.name = name;
  this.difficulty = difficulty,
  this.urgency = urgency,
  this.reward = reward;
  this.completed = completed;
}


module.exports = Task;
