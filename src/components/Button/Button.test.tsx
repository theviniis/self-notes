import { render } from '@testing-library/react';
import { Button } from '.';

const testId = 'Button-test-id';

describe('<Button />', () => {
  test('Test if Button component renders correctly', () => {
    const { getByTestId } = render(<Button data-testid={testId} />);
    const element = getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
