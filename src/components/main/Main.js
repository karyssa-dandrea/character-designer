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
  return (
    <main>
      <Preview {...{ head, middle, bottom, phrase }} />
      <Editor {...{ head, setHead, middle, setMiddle, bottom, setBottom, phrase, setPhrase }} />
    </main>
  );
}
