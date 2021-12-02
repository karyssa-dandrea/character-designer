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
      <p>{head}</p>
      <p>{middle}</p>
      <p>{bottom}</p>
      <p>{phrase}</p>
      <div>
        <p>You have changed the head {headCount} times</p>
        <p> You have changed the middle {middleCount} times</p>
        <p>You have changed the bottom {bottomCount} times</p>
        <p>You have added a catch phrase {phraseCount} times </p>
      </div>
    </div>
  );
}
