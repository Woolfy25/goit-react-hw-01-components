import React from 'react';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.userinfo}>
        <img src={avatar} alt={username} className={css.userPicture} />
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.listElement}>
          <span className={css.listElementText}>Followers</span>
          <span className={css.listElementStats}>{stats.followers}</span>
        </li>
        <li className={css.listElement}>
          <span className={css.listElementText}>Views</span>
          <span className={css.listElementStats}>{stats.views}</span>
        </li>
        <li className={css.listElement}>
          <span className={css.listElementText}>Likes</span>
          <span className={css.listElementStats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
