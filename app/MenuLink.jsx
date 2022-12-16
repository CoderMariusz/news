import Link from 'next/link';
import React from 'react';

function NavLink({ text, isActive }) {
  return (
    <Link
      className='navLink'
      href={`/news/${text}`}
    >
      {text}
    </Link>
  );
}

export default NavLink;
