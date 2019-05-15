import React from 'react';
import './styles.styl';

export default ({ className, label }) => (
  <span
    aria-label={label}
    className={`triangle-arrow${className ? ` ${className}` : ''}`}
  />
);
