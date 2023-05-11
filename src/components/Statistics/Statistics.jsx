import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.item}>
      <li>
        <p className={css.info}>Good: {good}</p>
      </li>
      <li>
        <p className={css.info}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={css.info}>Bad: {bad}</p>
      </li>
      <li>
        <p className={css.info}>Total: {total}</p>
      </li>
      <li>
        <p className={css.info}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
