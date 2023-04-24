class GameManager {
  constructor(default={}) {
    this.teamName = default.teamName || "";
    this.expansions = default.expansions || [0];
    this.campaign = new Campaign(default.campaign);
    this.rebellion = new Rebellion(default.rebellion);
    this.empire = new Empire(default.empire);
  }
}

class Card{
  constructor(default) {
    this.id = default.id;
    this.currency = default.currency;
    this.cost = default.cost;
  }
}

function purchase(card, owner) {
  if (owner[card.currency] >= card.cost) {
    owner[card.currency] -= card.cost;
    owner.ownedCards.push(card);
  }
}

/*
Aftermath
Rebels: A New Threat
Empire: Under Siege

A New Threat
Rebels: Imperial Hospitality
Empire: Fly Solo

Under Siege
Rebels: Imperial Hospitality
Empire: Fly Solo

Imperial Hospitality
Rebels: Incoming
Empire: Drawn In

Fly Solo
Rebels: Incoming
Empire: Drawn In

Incoming
Rebels: Chain of Command
Empire: The Source

Drawn In
Rebels: Chain of Command
Empire: The Source

Chain of Command
Rebels: Last Stand
Empire: Desperate Hour

The Source
Rebels: Last Stand
Empire: Desperate Hour

Finale: Last Stand
Finale: Desperate Hour
*/
