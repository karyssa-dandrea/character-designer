import React from 'react';

export default function Preview({ head, middle, bottom, phrase }) {
  return (
    <div className={`preview ${phrase}`}>
      <p>{head}</p>
      <p>{middle}</p>
      <p>{bottom}</p>
      <p>{phrase}</p>
    </div>
  );
}
