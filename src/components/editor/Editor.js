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
        <select value={middle} onChange={(e) => setMiddle(e.target.value)} />
        <label htmlFor="middle">Middle</label>
      </div>
      <div className="form-control">
        <select value={bottom} onChange={(e) => setBottom(e.target.value)} />
        <label htmlFor="bottom">Bottom</label>
      </div>
      <div className="form-control">
        <input
          name="phrase"
          type="text"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
        />
        <label htmlFor="phrase">Add A Catch Phrase</label>
      </div>
    </div>
  );
}
