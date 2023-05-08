import { render, screen } from '@testing-library/react';
import { Button } from '.';

const testId = 'Button-test-id';

describe('<Button />', () => {
  test('Test if Button component renders correctly', () => {
    render(<Button data-testid={testId} />);
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
