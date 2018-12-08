// Store saving dafault values

import { observable, computed } from 'mobx';

class System {
  @observable sound = {
    muted: false,
    factor: 0.5
  }
  @observable gameSurfaceCoords = {
    centerX: null,
    centerY: null,
    width: null,
    height: null,
    radius: null
  }
  @computed get canonicalSizes() {
    return {
      width: this.gameSurfaceCoords.width / 11 * 2,
      height: this.gameSurfaceCoords.width / 55
    }
  }
  physicalScreen = null;

  constructor() {
    this.text = {
      fadeoutTime: 1500,
      readingTime: 3500,
    }
    this.TimeForRemoval = this.fadeoutTime + this.readingTime;

    this.backgroundState = 'intro';
  }

  toggleAllSound() {
    this.sound.muted = !this.sound.muted;
  }
  muteAllSound() {
    this.sound.muted = true;
  }
  unmuteAllSound() {
    this.sound.muted = false;
  }
}

const SystemShop = new System();

export default SystemShop;
