import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children?: ReactNode;
};

export const Portal: FunctionComponent<PortalProps> = ({
  children,
}: PortalProps) => {
  const [portalNode] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(portalNode);
    return () => {
      document.body.removeChild(portalNode);
    };
  }, [portalNode]);

  return createPortal(children, portalNode);
};
