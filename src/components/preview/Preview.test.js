import { render, screens } from '@testing-library/react';
import Preview from './Preview';

test('renders the preview panel', () => {
  const container = render(
    <Preview
      head=""
      middle=""
      bottom=""
      phrase=""
      headCount="0"
      middleCount="0"
      bottomCount="0"
      phraseCount="0"
      phraseList={[]}
    />
  );
  expect(container).toMatchSnapshot();
});
