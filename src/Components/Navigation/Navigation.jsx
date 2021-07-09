import React from 'react';
import * as styles from './Navigation.module.scss';

export default function Navigation({ children }) {
  return (
    <div className={styles.navigation}>{children}</div>
  )
};