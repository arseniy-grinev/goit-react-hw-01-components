import PropTypes from 'prop-types';

import {
  StatisticsWrap,
  Title,
  StatisticsList,
  StatisticsItem,
  StatTitle,
  StatPercentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsWrap>
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <StatTitle>{label}</StatTitle>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsWrap>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
