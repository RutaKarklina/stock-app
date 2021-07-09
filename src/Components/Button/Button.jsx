import React from 'react';
import * as styles from './Button.module.scss';

export default function GeneralButton({ children }) {
  return (
    <div className={styles.generalButton}>{children}</div>
  )
};