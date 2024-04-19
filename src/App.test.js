import { render, screen } from '@testing-library/react';
import { Page } from './stories/Page';
import {TextInput} from './stories/TextInput'

test('find text on the page', () => {
  render(<Page />);
  const linkElement = screen.queryByText(/Pages in Storybook/i);
  expect(linkElement).toBeInTheDocument();
});
