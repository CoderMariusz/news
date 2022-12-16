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
  return (
    <nav>
      {menu.map((e) => (
        <MenuLink
          key={e}
          text={e}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
