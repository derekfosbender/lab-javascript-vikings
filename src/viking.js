// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
    
    attack(){
      return this.strength;
    }
    
    receiveDamage(amount){
      this.health -= amount;
    }
    
  }
  
  
  
  class Viking extends Soldier {
      constructor(name, health, strength){
        super(health, strength);
        
        this.name = name;
      }
    
    attack(){
      return this.strength;
    }
    receiveDamage(amount1){
              //let update = this.health -= amount1;
        super.receiveDamage(amount1)
          if (this.health > 0) {
              return `${this.name} has received ${amount1} points of damage`;
          }
          else {
              return `${this.name} has died in act of combat`;
          }
      }
    battleCry(){
      return 'Odin Owns You All!'
    }
  }
// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
      super(health, strength);
    }
  attack(){
    return this.strength;
  }
  receiveDamage(amount2){
    super.receiveDamage(amount2)
          if (this.health > 0) {
    return `A Saxon has received ${amount2} points of damage`;
}
else {
    return `A Saxon has died in combat`;
}
}
}


// War
class War {}
