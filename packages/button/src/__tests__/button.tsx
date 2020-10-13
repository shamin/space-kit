import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
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
