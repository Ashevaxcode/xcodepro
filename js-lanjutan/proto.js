//prototype
function User(nama, power) {
  this.nama = nama;
  this.power = power;
}

let xcode = new User("xcodepro", 200);

//membuat object menggunakan class

class Hero {
  constructor(nama, power) {
    this.nama = nama;
    this.power = power;
  }

  makan(porsi) {
    this.power += porsi;
    return `Hai ${this.nama} Your power increase to ${this.power}`;
  }

  meta(jam) {
    this.power += jam * 2;
    return `Hai ${this.nama} Your power increase to ${this.power}`;
  }

  boost(jam) {
    this.power += jam * 4;

    return (document.body.innerHTML = `Hai ${
      this.nama
    } your power double boost ${jam * 4} become ${this.power}`);
  }

  damage(hit) {
    this.power -= hit;
    return `Hai ${this.nama} Your power decrease to ${this.power}`;
  }
}

let xcodepro = new Hero("xcode", 250);
let ashevajess = new Hero("ashevajess", 300);

//class inheritance atau pewarisan
class Knight extends Hero {
  constructor(nama, power, ability, weapons, attack) {
    super(nama, power); //mengacu pada constructor parentnya Hero
    //class ini akan memiliki method yg sama seperti hero
    this.ability = ability;
    this.weapons = weapons;
    this.attack = attack;
  }

  //method
  serang(hit) {
    this.attack += hit;
    return (document.body.innerHTML = `Great ${this.nama} Your hit power is ${this.attack}`);
  }
}

let squall = new Knight("squalljess", 300, "lightning crush", "lionheart", 50);

class Warrior extends Knight {
  constructor(nama, power, ability, weapons, attack, magic, gf) {
    super(nama, power, ability, weapons, attack);
    this.magic = magic;
    this.gf = gf;
  }
}

let zell = new Warrior(
  "zellious",
  300,
  "power puch",
  "glove tiger",
  80,
  "darkpunch",
  "bahamut"
);
