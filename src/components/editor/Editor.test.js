import { render, screens } from '@testing-library/react';
import Editor from './Editor';

test('renders the editor panel', () => {
  const container = render(<Editor head="" middle="" bottom="" phrase="true" />);
  expect(container).toMatchSnapshot();
});
