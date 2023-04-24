class Empire {
  constructor(default) {
    this.influence = default.influence || 0;
    this.agendaSet = default.agendaSet || [];
    this.agendaHand = default.agendaHand || [];
    this.exp = default.exp || 0;
    this.class = default.class || [];
    this.ownedCards = default.ownedCards || [];
  }
}
