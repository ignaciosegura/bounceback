/* global  */
// GameShop

import { observable, computed } from 'mobx';
import levelList from '../../gameData/levellist.js';

class Game {
  @observable bounces = 0;
  @observable level = 0;
  @observable initialLives = 0;
  @observable deadAtoms = 0;
  @observable capturedAtoms = 0;
  totalLevels = levelList.length;
  type = '';
  @observable playing = false;

  @computed get lives() {
    let computed = this.initialLives - this.deadAtoms;
    return (computed > 0)
      ? computed
      : 0;
  }

  @computed get captures() {
    return this.type === 'tutorial'
      ? 0
      : this.capturedAtoms;
  }

  @computed get score() {
    return (this.bounces * 10 + this.captures * 100) * this.level;
  }

  addBounce(b = 1) {
    this.bounces += b;
  }

  nextLevel() {
    this.level++;
  }

  resetCaptures() {
    this.captured = 0;
  }

  resetBounces() {
    this.bounces = 0;
  }

  resetScore() {
    this.resetCaptures();
    this.resetBounces();
  }

  isLastLevel() {
    return ((this.level + 1) === this.totalLevels);
  }
  isTutorial() {
    return (this.type === 'tutorial');
  }
}

const GameShop = new Game();

export default GameShop; 
