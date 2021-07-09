import React from 'react';
import * as styles from './Input.module.scss';

export default function Input({ text, placeholder }) {
  return (
    <div>
      <label>
        {text}
        <input type="text" className={styles.input} placeholder={placeholder} />
      </label>
    </div>
  )
};