import Link from 'next/link';
import React from 'react';

function NavLink({ text, isActive }) {
  return (
    <Link
      className={`navLink ${
        isActive &&
        'underline decoration-orange-400 underline-offset-4 font-bold text-xl'
      }`}
      href={`/news/${text}`}
    >
      {text}
    </Link>
  );
}

export default NavLink;
