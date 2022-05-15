import React, { ReactNode } from 'react';
import { UrlObject } from 'url';
import Link from 'next/link';

type Props = {
  href: string | UrlObject;
  children?: ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
};

const CustomLink = ({ href, target, children }: Props) => (
  <Link href={href}>
    <a target={target} className="transition-colors duration-300 hover:text-gray-300 text-gray-500">
      {children}
    </a>
  </Link>
);

export default CustomLink;
