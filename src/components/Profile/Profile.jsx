import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsTitle,
  StatsQuantity,
  ProfileStatsList,
} from './Profile.styled';
// import { Description } from 'components/Profile/Description';
// import { ProfileStatsList } from 'components/Profile/ProfileStatsList';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileWrap>
      <Description>
        <Avatar src={avatar} alt="User avatar" class="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <ProfileStatsList>
        <li>
          <StatsTitle>Followers</StatsTitle>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </li>
        <li>
          <StatsTitle>Views</StatsTitle>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </li>
        <li>
          <StatsTitle>Likes</StatsTitle>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </li>
      </ProfileStatsList>
    </ProfileWrap>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape.isRequired,
};
