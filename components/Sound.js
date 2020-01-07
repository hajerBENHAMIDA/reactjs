import React from 'react';
import {useAudio} from 'react-use';
 var sound = require("../assets/sound_back.mp3");
const Sound = () => {

  const [audio, state, controls] = useAudio({
    src: sound,
    autoPlay: true,
  });

  const play = () => {
      if (state.paused) {
          controls.play() ;
      } else {
          controls.pause() ;
      }

    }; 

  return (
      <div className="display">
        {audio}
        <div className={`btn ${!state.paused?"sound":"nosound"}`} onClick={() => play()}></div>
        <br/>
  
      </div>
    );

};
export default Sound;