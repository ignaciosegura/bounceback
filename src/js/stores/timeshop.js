/* global  */
// TimeShop

import {observable, computed} from 'mobx';

class Time {
  frameRate = 60;
  millisecondsPerFrame = 1000 / this.frameRate;
  @observable tick = 0;
  @observable beat = 0;
  @observable time = 0;
  framesPerBeat;
  framesPerTime;

  setup(bpm, timeSignature) {
    this.framesPerBeat = Math.floor(Math.pow(this.frameRate, 2) / bpm);
    this.framesPerTime = timeSignature * this.framesPerBeat;
  }

  updateTimeUnits() {
    this.beat = this.getRoundedTimeUnit(this.beat, this.framesPerBeat); 
    this.time = this.getRoundedTimeUnit(this.time, this.framesPerTime);
  }

  getRoundedTimeUnit(current, framesPerUnit) {
    let tickToUnit = this.tick / framesPerUnit;
    return (tickToUnit === Math.floor(tickToUnit))
      ? tickToUnit
      : current;
  }

  nextTick() {
    this.tick++;
    this.updateTimeUnits();
  }
}

const TimeShop = new Time();

export default TimeShop; 
