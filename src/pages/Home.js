import React from 'react';

function Home({ children }) {
  return (
    <div className="bg-gray-100 border-b py-py-custom border-gray-200 dark:bg-gray-900 dark:border-gray-700 calc[w-screen + 10px]">
      <div>
        {children}
      </div>
    </div>
  );
}

export default Home;
