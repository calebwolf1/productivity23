import React from 'react';
import './Friends.css';
import friend from '../Assets/Friend.png';
import friend1 from '../Assets/Friend (1).png';
import friend2 from '../Assets/Friend (2).png';
 

function Friends() {
  return (
    <div className="background-friends-block">
      <h1>Friends</h1>
      <img src={friend} className="Friend" />
      <img src={friend1} className="Friend1" />
      <img src={friend2} className="Friend2" />
    </div>
  );
}

export default Friends;