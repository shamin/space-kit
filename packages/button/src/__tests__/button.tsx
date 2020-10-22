import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from '../button';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('passes a11y test', async () => {
    const { container } = render(<Button>Hello</Button>);
    const results = await axe(container);
    //@ts-ignore
    expect(results).toHaveNoViolations();
  });
  it('clicking triggers onClick', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Hello</Button>);

    fireEvent(
      getByText('Hello'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
