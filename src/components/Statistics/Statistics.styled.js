import styled from 'styled-components';
import getRandomColor from '../getRandomColor/randomColor';

export const StatisticsWrap = styled.section`
  margin: 0 auto;
  margin-top: 60px;
  width: 400px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  padding: 24px 0;
  text-align: center;
  font-size: 24px;
  line-height: 1.33;
  text-transform: uppercase;
  font-weight: 600;
  color: #646e69;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-radius: 4px;
`;

export const StatisticsItem = styled.li`
  width: 80px;
  text-align: center;
  background-color: ${getRandomColor};
`;

export const StatTitle = styled.span`
  display: block;
  padding: 8px;
  font-size: 16px;
  line-height: 1.33;
  font-weight: 500;
  color: #ffffff;
`;

export const StatPercentage = styled.span`
  display: block;
  padding-bottom: 6px;
  font-size: 22px;
  line-height: 1.33;
  font-weight: 500;
  color: #ffffff;
`;
