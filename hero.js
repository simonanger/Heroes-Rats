var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.quests = [];
  this.completedQuests = [];
}

Hero.prototype.talk = function() {
  return ("My name is " + this.name + "!");
};

Hero.prototype.eat = function(food) {
  if (food.name === this.favFood) {
    this.health += (food.replenishmentValue * 1.5);
  }
  else {
    this.health += food.replenishmentValue;
  };
};

Hero.prototype.acceptQuest = function(quest) {
  this.quests.push(quest);
};

Hero.prototype.sortQuests = function(parameter) {
  if (parameter === "urgency"){
    this.quests.sort(function(a,b) {
      return a.urgency - b.urgency;
    })
  }; // if the ratings go same way can sort with a[parameter]
  if (parameter === "difficulty") {
    this.quests.sort(function(a,b) {
      return b.difficulty - a.difficulty;
    })
  };
};

Hero.prototype.completeQuest = function(quest) {
  var index = this.quests.indexOf(quest);
  for (incomplete of this.quests) {
    if (incomplete.name === quest.name) {
      incomplete.completed = true;
      this.completedQuests.push(incomplete);
      this.quests.splice(index, 1);
    }
  };
};


module.exports = Hero;
