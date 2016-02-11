import {getMorseCodeForCharacter} from './morseCodeAlphabet';

const defaultSettings = {
  volume: 1,
  farnsworth: 0,
  wpm: 13,
  frequency: 440,
  type: 'sine'
};

export default function (settings) {
  settings = Object.assign({}, defaultSettings, settings);

  const context = new (window.AudioContext || window.webkitAudioContext);

  const gainNode = context.createGain();
  gainNode.connect(context.destination);
  gainNode.gain.value = 0;

  Object.observe({val: gainNode.gain.value}, change => {
    console.log('CHANGE');
  });

  const oscillatorNode = context.createOscillator();
  oscillatorNode.type = settings.type;
  oscillatorNode.frequency.value = settings.frequency;
  oscillatorNode.connect(gainNode);
  oscillatorNode.start(0);

  let changeCallback = function () {};
  let timeslot = 0;

  return {
    play,
    registerChangeCallback
  };

  function registerChangeCallback (cb) {
    changeCallback = cb;
  }

  function getLengthForMorseCharacter (morseChar) {
    if (morseChar === '·') {
      return 1;
    } else if (morseChar === '−') {
      return 3;
    } else if (morseChar === ' ') {
      return 7;
    } else {
      return 3;
    }
  }

  function playSound (volume, length) {
    timeslot++;
    const ditLength = 1200 / settings.wpm;

    setTimeout(() => {
      gainNode.gain.value = volume;
      changeCallback(gainNode.gain.value);
    }, timeslot * ditLength);

    setTimeout(() => {
      gainNode.gain.value = 0;
      changeCallback(gainNode.gain.value);
    }, (timeslot + length) * ditLength);

    // onst rampTime = 1 / oscillatorNode.frequency.value * 2;
    // var now = context.currentTime;
    // gainNode.gain.linearRampToValueAtTime(0, now + timeslot * ditLength / 1000);
    // gainNode.gain.linearRampToValueAtTime(volume, now + timeslot * ditLength / 1000 + rampTime);
    //
    // gainNode.gain.linearRampToValueAtTime(volume, now + (timeslot + length) * ditLength / 1000);
    // gainNode.gain.linearRampToValueAtTime(0, now + (timeslot + length) * ditLength / 1000 + rampTime);

    timeslot += length;
  }

  function play (message) {
    timeslot = 0;
    message.split('').forEach(character => {
      // Send next character as plain text back to visualisation or anything:
      let morseCode = getMorseCodeForCharacter(character);

      morseCode.split('').forEach(char => {
        if (char === '·') {
          playSound(settings.volume, getLengthForMorseCharacter(char));
        } else if (char === '−') {
          playSound(settings.volume, getLengthForMorseCharacter(char));
        } else if (char === ' ') {
          playSound(0, getLengthForMorseCharacter(char));
        }
      });
      playSound(0, 3 + settings.farnsworth);
    });
  }
}
