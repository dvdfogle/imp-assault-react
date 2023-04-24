class Team {
  constructor(default) {
    this.heroes = default.heroes.map(x => new Hero(x)) || [];
    this.credits = default.credits || 0;
    this.equipment = default.equipment || [];
  }
}

class Hero {
  constructor(default) {
    this.name = default.name || "";
    this.ownedCards = default.ownedCards || [];
    this.exp = default.exp || 0;
    this.statuses = default.statuses || [];
  }
}
