// Store saving dafault values

import { observable, computed } from 'mobx';

class Default {
  constructor() {
    this.text = {
      fadeoutTime: 1500,
      readingTime: 3500,
    }
    this.TimeForRemoval = this.fadeoutTime + this.readingTime;
  }

}

const DefaultsShop = new Default();

export default DefaultsShop;