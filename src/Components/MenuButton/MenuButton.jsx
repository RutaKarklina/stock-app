import React from 'react';
import * as styles from './MenuButton.module.scss';

export default function MenuButton({ Logo, text }) {
  return (
    <div className={styles.menuButton}>
      {Logo && <div className={styles.iconContainer}> <Logo className={styles.icon} /></div>}
      {text}
    </div>
  )
};