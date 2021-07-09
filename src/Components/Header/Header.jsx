import React from 'react';
import * as styles from './Header.module.scss';

export default function Header({ children }) {
  return (
    <div className={styles.header}>{children}</div>
  )
};