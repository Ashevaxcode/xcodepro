User.prototype.damage = function(hit){
  this.power -= hit;
}

User.prototype.makan = function(porsi){
  this.power += porsi;
  return `Hai ${this.nama} Your power increase to ${this.power}`;
}
User.prototype.meta = function(jam){
  this.power += jam * 2;
  return `Hai ${this.nama} Your power increase to ${this.power}`;
}

User.prototype.boost = function(jam){
  this.power += jam * 4;
  return `Hai ${this.nama} your power double boost ${jam * 4} become ${this.power}`;
  
  document.body.innerHTML = `Hai ${this.nama} your power double boost ${jam * 4} become ${this.power}`;
}
