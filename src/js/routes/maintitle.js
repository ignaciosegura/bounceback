/* Global require */
import React from 'react';

import ScreenMenu from '../screenmenu.js';
import SoundtrackService from '../services/soundtrackservice.js';
import BackgroundService from '../services/backgroundservice.js';

import Footer from '../footer.js';

import InlineSVG from 'svg-inline-react';

class MainTitle extends React.Component {
  constructor() {
    super();
    this.playSoundtrack();
    BackgroundService.changeState('intro');
  }
  playSoundtrack() {
    let mainScreenSong = require('../../sound/tracks/main_title.mp3');
    SoundtrackService.newTrack(mainScreenSong, 'intro');
    SoundtrackService.play();
  }

  render() {
    let GameLogo = require('../../img/game_logo_v2.svg');

    return <div>
      <div id="main-title">
        <InlineSVG className="main-logo" src={GameLogo} raw={true} />
        <ScreenMenu />
      </div>
      <Footer />
    </div>
  }
}

export default MainTitle;
