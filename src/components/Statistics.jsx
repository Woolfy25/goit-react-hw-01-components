import React from 'react';
import css from './Statistics.module.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.statisticsHeader}>{title}</h2>

      <ul className={css.statisticsList}>
        {stats.map((stat, index) => (
          <li
            key={index}
            className={css.statisticsListElements}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span>{stat.label}</span>
            <span className={css.statisticsListElementsText}>
              {stat.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
