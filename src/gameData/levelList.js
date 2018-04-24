/*global require*/
//EXAMPLE LEVEL

/*
{
  name: '',
  levelType: '', // Possible values are "tutorial" / "real"
  levelLength: , // measured in times.
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
    levelLength: 24,
    levelPassAction: 'next',
    gameOverAction: 'gameover',
    time: {
      bpm: 140,
      signature: 4
    },
    sound: {
      launch: require('../sound/launch.mp3'),
      bounce: require('../sound/bounce_dry.mp3'),
      destroy: require('../sound/destroy.mp3'),
      song: ''
    },
    atomSpeed: 1,
    atomList: [
      { t: 0, b: 0 },
      { t: 2, b: 3.5 },
      { t: 7, b: 0.5 },
      { t: 6, b: 3.5 },
      { t: 11, b: 0.5 }
    ]
  }
];

export default levelList;
