'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SearchBox() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-6xl mx-auto flex justify-between items-center px-5'
    >
      <input
        placeholder='search keywords...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1 dark:text-orange-400'
      />
      <button
        type='submit'
        disabled={!input}
        className=' disabled:text-gray-300 text-orange-400 '
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
