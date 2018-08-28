import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css';

function Volume(props) {
  return(
    <button className="Volume">
      <VolumeIcon
        size={25}
        color="white"
      />
      <div className="Volume-range">
        <input type="range" />
      </div>
    </button>
  );
}

export default Volume;
