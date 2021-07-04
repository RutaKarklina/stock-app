import React from 'react';
import * as styles from './Card.module.scss';
import c from 'classnames';

export default function Card({ children, className }) {
  return (
    <div className={c(styles.card, className)}>{children}</div>
  )
};