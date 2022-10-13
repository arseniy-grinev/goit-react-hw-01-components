import PropTypes from 'prop-types';

import { FriendsItem } from './FriendsItem';
import { FriendsList } from './Friends.styled';

export default function Friends({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendsList>
  );
}

// Friends.propTypes = {
//   Friends: PropTypes.array.isRequired,
// };
