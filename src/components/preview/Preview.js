import React from 'react';

export default function Preview({
  head,
  middle,
  bottom,
  phrase,
  headCount,
  middleCount,
  bottomCount,
  phraseCount,
}) {
  return (
    <div className={`preview ${phrase}`}>
      <img alt={head} height="75" src={`${process.env.PUBLIC_URL}/outfits/${head}.png`} />
      <img
        alt={middle}
        height="75"
        src={`${process.env.PUBLIC_URL}/outfits/${middle}-middle.png`}
      />
      <img alt={bottom} height="75" src={`${process.env.PUBLIC_URL}/outfits/${bottom}.png`} />
      <p>{phrase}</p>
      <div>
        <p>You have changed the head {headCount} times</p>
        <p> You have changed the middle {middleCount} times</p>
        <p>You have changed the bottom {bottomCount} times</p>
        <p>You have added a catch phrase {phraseCount} times </p>
        <p></p>
      </div>
    </div>
  );
}
