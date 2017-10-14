var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.quests = [];
  this.completedQuests = [];
  this.weapons = [];
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

Hero.prototype.getWeapon = function(weapon) {
  this.weapons.push(weapon);
};

// Hero.prototype.attack = function(weapon, enemy) {
//   for (attackWeapon of this.weapons) {
//     if (attackWeapon.name === weapon.name) {
//       enemy.health -= weapon.attackValue;
//     };
//   };
//   if (this.weapons.length === 0) {
//     this.health -= enemy.attackValue;
//   }
// }

Hero.prototype.attack = function(weapon, enemy) {
  this.weapons.forEach(function(attackWeapon) {
    if (attackWeapon.name === weapon.name) {
      enemy.health -= weapon.attackValue;
    };
  });
    if (this.weapons.length === 0) {
      this.health -= enemy.attackValue;
    }
};

Hero.prototype.randomAttack =  function(weapon, enemy) {
  var randomNo = Math.floor(Math.random() * 100);
  if (randomNo % 2 === 0 ) {
    enemy.health -= weapon.attackValue;
    console.log( this.name + " attacked", enemy.name, "with the", weapon.name,
      "and did", weapon.attackValue, "damage!");
    console.log(enemy.name + "'s health is now", enemy.health );
  }
  else {
    this.health -= enemy.attackValue;
    console.log(this.name, "attacked and missed!", enemy.name, "retaliated by dealing",
      enemy.attackValue, "damage!" );
    console.log(this.name +"'s health is now", this.health);
  }
};

module.exports = Hero;
