'use client';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <SunIcon
          className='h-8 w-8 cursor-pointer text-yellow-500 transition-all duration-300 ease-in-out'
          onClick={() => setTheme('light')}
        />
      ) : (
        <MoonIcon
          className='h-8 w-8 cursor-pointer text-slate-800 transition-all duration-300 ease-in-out'
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
