var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.talk = function() {
  return ("My name is " + this.name + "!");
};

Hero.prototype.eat = function(food) {
  if (food.name === this.favFood) {
    this.health += (food.replenishmentValue * 1.5);
  }
  else {
    health += food.replenishmentValue;
  };
};

module.exports = Hero;
