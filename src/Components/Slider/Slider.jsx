import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import * as styles from './Slider.module.scss';

function Slider({ min, max, onChange, onAfterChange }) {
  const [value, setValue] = useState(0);

  const renderThumb = (props) => (
    <div {...props}>
    </div>
  );

  const handleChange = (newValue) => {
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  }

  return (
    <>
      <div className={styles.valueContainer}>
        <span>{value}</span>
      </div>
      <ReactSlider
        onChange={handleChange}
        onAfterChange={onAfterChange}
        min={min}
        max={max}
        className={styles.slider}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        renderThumb={renderThumb}
      />
      <div className={styles.constraintContainer}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </>
  )

};

export default Slider;