// import PropTypes from 'prop-types';

import { Item, Status, Avatar, Name } from './Friends.styled';

export const FriendsItem = ({ avatar, isOnline, name }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

// FriendsItem.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };
