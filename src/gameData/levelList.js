/*global require*/
//EXAMPLE LEVEL

/*
{
  name: '',
  levelType: '', // Possible values are "tutorial" / "real"
  duration: , // measured in times.
  levelPassAction: 'next', // Possible values are "next"
  gameOverAction: 'gameover' // possible values are "gameover" and "restart"
  time = {
    bpm: 120,
    signature: 4
  };
  sound = {
    launch: '',
    bounce: '',
    destruction: '',
    song: ''
  },
  atomSpeed: 1, // Beats to make a round trip
  atomList: [] // Array of moments where a new atom should be created
}

*/


const levelList = [
  {
    name: 'Tutorial',
    levelType: 'tutorial',
    duration: 2,
    levelPassAction: 'next',
    gameOverAction: 'gameover',
    time: {
      bpm: 115,
      signature: 4
    },
    sound: {
      launch: require('../sound/launch.mp3'),
      bounce: require('../sound/bounce_dry.mp3'),
      destroy: require('../sound/destroy.mp3'),
      song: require('../sound/tracks/tutorial.mp3')
    },
    atomSpeed: 4,
    atomList: [
      { t: 0, b: 0 },
      { t: 1, b: 0 },
    ]
  },
  {
    name: 'Femtocosmos',
    levelType: 'game',
    duration: 16,
    levelPassAction: 'next',
    gameOverAction: 'gameover',
    time: {
      bpm: 130,
      signature: 4
    },
    sound: {
      launch: require('../sound/launch.mp3'),
      bounce: require('../sound/bounce_dry.mp3'),
      destroy: require('../sound/destroy.mp3'),
      song: require('../sound/tracks/femtocosmos.mp3')
    },
    atomSpeed: 2,
    atomList: [
      { t: 0, b: 0 },
      { t: 4, b: 0 },
      { t: 6, b: 1.5 },
      { t: 8, b: 3.5 },
      { t: 9, b: 1.5 },
      { t: 11, b: 2.75 },
      { t: 13, b: 1 },
      { t: 16, b: 0.5 },
      { t: 19, b: 3.25 },
      { t: 21, b: 0.75 },
      { t: 24, b: 2.5 },
    ]
  },
  {
    name: 'Chronosaedrøn',
    levelType: 'game',
    duration: 30,
    levelPassAction: 'next',
    gameOverAction: 'gameover',
    time: {
      bpm: 130,
      signature: 4
    },
    sound: {
      launch: require('../sound/launch.mp3'),
      bounce: require('../sound/bounce_dry.mp3'),
      destroy: require('../sound/destroy.mp3'),
      song: require('../sound/tracks/chronosaedron.mp3')
    },
    atomSpeed: 2,
    atomList: [
      { t: 0, b: 0 },
      { t: 4, b: 0 },
      { t: 6, b: 1.5 },
      { t: 8, b: 3.5 },
      { t: 9, b: 1.5 },
      { t: 11, b: 2.75 },
      { t: 13, b: 1 },
      { t: 16, b: 0.5 },
      { t: 19, b: 3.25 },
      { t: 21, b: 0.75 },
      { t: 24, b: 2.5 },
    ]
  }
];
// Synthetogenesis
// Quantåmorphica
// Mekanomancer
// Femtocosmos
// Gravcon
// Neutronika
// Hexerion
export default levelList;
