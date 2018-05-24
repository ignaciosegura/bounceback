// Sound engine

class SoundFX {
  constructor(sound = null) {
    this.sound = new Audio(sound);
    this.sound.volume = 1;
    this.fadeoutTime = 3000;
    this.fadeInterval;

    this.sound.load();
  }

  play() {
    this.sound.play();
  }

  fadeOut() {
    let soundFrame = 5;
    let rate = 1 * soundFrame / this.fadeoutTime;

    this.fadeInterval = setInterval(
      () => {
        let newVolume = this.sound.volume - rate;
        this.sound.volume = (newVolume >= 0)
          ? newVolume
          : 0;
        if (this.sound.volume === 0) clearInterval(this.fadeInterval);
      }, soundFrame);
  }

}

export default SoundFX;
