import React from 'react';
import ReactSlider from 'react-slider';
import * as styles from './Slider.module.scss';

function Slider({ min, max, onChange }) {
  const renderThumb = (props, state) => (
    <div {...props}>
      {state.valueNow}
    </div>
  );
  return (
    <ReactSlider
      onChange={onChange}
      min={min}
      max={max}
      className={styles.slider}
      thumbClassName={styles.thumb}
      trackClassName={styles.track}
      renderThumb={renderThumb}
    />
  )
};

export default Slider;