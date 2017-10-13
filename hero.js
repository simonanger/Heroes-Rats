var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.quests = [];
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
}

module.exports = Hero;
