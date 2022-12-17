'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import MenuLink from './MenuLink';

function NavLinks() {
  const menu = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
  ];

  const pathname = usePathname();

  const isActive = (path) => {
    return pathname?.split('/').pop() === path;
  };

  return (
    <nav className='grid grid-cols-4 md:grid-cols-8 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b'>
      {menu.map((e) => (
        <MenuLink
          key={e}
          text={e}
          isActive={isActive(e)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
