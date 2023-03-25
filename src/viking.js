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
        
        this.name;
      }
    
    attack(){
      return this.strength;
    }
    receiveDamage(amount1){
              let update = this.health -= amount1;
          if (update > 0) {
              return `${this.name} has received ${damage} points of damage`;
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
    return '${this.strength} of ${this.saxon}'
  }
  receiveDamage(amount2){
    let update = this.health -= amount2;
if (update > 0) {
    return `A ${Saxon} has received ${damage} points of damage`;
}
else {
    return `${Saxon} has died in act of combat`;
}
}
}
// War
class War {}
