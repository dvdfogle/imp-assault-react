class Campaign {
  constructor(details={}) {
    this.name = details.name;
    this.missionList = details.missionList.map(x => new Mission(x)) || campaigns[this.name];
    this.currentMission = details.currentMission || 0;
  }

  function currentMission() {
    return this.missionList[this.currentMission];
  }
}

class Mission {
  constructor(default) {
    this.name = default.name || "";
    this.type = default.type || "story";
    this.threatLevel = default.threatLevel || 0;
    this.shopTier = default.shopTier || [];
    this.deployments = default.deployments || {"rebels": [], "empire": []};
  }
}

const campaigns = {
  "Imperial Assault": [
    new Mission({
      name: "Aftermath",
      type: "story",
      threatLevel: 2,
      shopTier: [1]
    }),
    new Mission({
      type: "side",
      threatLevel: 2,
      shopTier: [1]
    }),
    new Mission({
      type: "story",
      threatLevel: 3,
      shopTier: [1]
    }),
    new Mission({
      type: "side",
      threatLevel: 3,
      shopTier: [1,2]
    }),
    new Mission({
      type: "story",
      threatLevel: 4,
      shopTier: [2]
    }),
    new Mission({
      type: "side",
      threatLevel: 4,
      shopTier: [2]
    }),
    new Mission({
      type: "side",
      threatLevel: 4,
      shopTier: [2,3]
    }),
    new Mission({
      type: "story",
      threatLevel: 5,
      shopTier: [3]
    }),
    new Mission({
      type: "side",
      threatLevel: 5,
      shopTier: [3]
    }),
    new Mission({
      type: "story",
      threatLevel: 6,
      shopTier: [3]
    }),
    new Mission({
      type: "story",
      threatLevel: 6,
      shopTier: []
    })
  ]
}
