import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ data, title }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css['stat-list']}>
      {data.map(element => {
        return (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            className={css.item}
            key={element.id}
          >
            <span className={css.label}>{element.label}</span>
            <span className={css.percentage}>{element.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
};
