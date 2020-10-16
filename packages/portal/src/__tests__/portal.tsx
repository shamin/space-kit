import React from 'react';
import { render } from '@testing-library/react';
import { Portal } from '../portal';

jest.mock('react-dom', () => ({
  ...(jest.requireActual('react-dom') as any),
  createPortal: jest.fn(),
}));

const {
  createPortal: createPortalSpy,
}: { [key: string]: jest.Mock } = jest.requireMock('react-dom');

describe('Portal', () => {
  beforeEach(() => {
    createPortalSpy.mockImplementation(() => null);
  });

  describe('children', () => {
    it('get passed into the portal creation method', () => {
      const children = <div />;
      render(<Portal>{children}</Portal>);
      expect(createPortalSpy).toHaveBeenCalledWith(children, expect.anything());
    });
  });

  describe('DOM node', () => {
    it('get added to the DOM on mount', () => {
      const appendChildSpy = jest.spyOn(document.body, 'appendChild');
      render(<Portal />);
      expect(appendChildSpy).toHaveBeenCalledWith(expect.any(HTMLDivElement));
      appendChildSpy.mockRestore();
    });

    it('get removed from the DOM on unmount', () => {
      const removeChildSpy = jest.spyOn(document.body, 'removeChild');
      const portal = render(<Portal />);
      portal.unmount();
      expect(removeChildSpy).toHaveBeenCalledWith(expect.any(HTMLDivElement));
      removeChildSpy.mockRestore();
    });
  });
});
