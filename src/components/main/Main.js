import React from 'react';
import { useState } from 'react';
import Preview from '../../components/preview/Preview';
import Editor from '../../components/editor/Editor';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [phrase, setPhrase] = useState('');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [phraseCount, setPhraseCount] = useState(0);
  const [phraseList, setPhraseList] = useState([]);

  return (
    <main>
      <Preview
        {...{ head, middle, bottom, phrase, headCount, middleCount, bottomCount, phraseCount }}
      />
      <Editor
        {...{
          head,
          setHead,
          middle,
          setMiddle,
          bottom,
          setBottom,
          phrase,
          setPhrase,
          headCount,
          setHeadCount,
          middleCount,
          setMiddleCount,
          bottomCount,
          setBottomCount,
          phraseCount,
          setPhraseCount,
          setPhraseList,
          phraseList,
        }}
      />
    </main>
  );
}
