import React, { FunctionComponent, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <div>
    {children}
  </div>
);

export default Layout;
