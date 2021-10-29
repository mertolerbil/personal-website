import React, { ReactNode } from 'react';
import Footer from 'components/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div className="flex flex-col min-h-screen bg-gray-900">
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
