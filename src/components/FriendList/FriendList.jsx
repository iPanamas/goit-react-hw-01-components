import PropTypes from 'prop-types';
import FriendListItem from "./FriendsListItem";
import s from './FriendList.module.css'

const FriendList = ({friends}) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(({id, avatar, name, isOnline}) => (
        <FriendListItem key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
)
}
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
}

