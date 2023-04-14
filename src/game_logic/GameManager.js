let instance;

class GameManager {
  constructor() {
    if (instance) {
      throw new Error("Unauthorized attempt to create GameManager object!");
    }
    instance = this;
  }
}

const gameManager = Object.freeze(new GameManager());
export default gameManager;
