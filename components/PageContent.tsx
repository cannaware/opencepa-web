import type { FC } from 'react';

export const PageContent: FC = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
