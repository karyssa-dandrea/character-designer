import React from 'react';

export default function Editor({
  head,
  setHead,
  middle,
  setMiddle,
  bottom,
  setBottom,
  phrase,
  setPhrase,
}) {
  return (
    <div className="editor">
      <div className="form-control">
        <label htmlFor="head">Head</label>
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="bird-head">Bird Head</option>
          <option value="dog-head">Dog Head</option>
          <option value="duck-head">Duck Head</option>
          <option value="horse-head">Horse Head</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="middle">Middle</label>
        <select value={middle} onChange={(e) => setMiddle(e.target.value)}>
          <option value="blue">Blue</option>
          <option value="fancy">Fancy</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="bottom">Bottom</label>
        <select value={bottom} onChange={(e) => setBottom(e.target.value)}>
          <option value="single">Single Leg</option>
          <option value="white-pants">White Pants</option>
          <option value="blue-jeans">Blue Jeans</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="phrase">Add A Catch Phrase</label>
        <input
          name="phrase"
          type="text"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
        />
      </div>
    </div>
  );
}