import React from 'react';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id} className={css.friendLIstItemList}>
          <span
            className={`${css.spanSatus} ${
              friend.isOnline ? css.online : css.offline
            }`}
          ></span>
          <img src={friend.avatar} alt="User avatar" width="65" />
          <p className={css.friendLIstItemName}>{friend.name}</p>
        </li>
      ))}
    </>
  );
};

export default FriendListItem;
