// components/ComingSoon.tsx
import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <section className="flex items-center justify-center h-screen text-black bg-gradient-to-br from-gray-500 to-gray-900">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-4">Coming Soon</h2>
        <p className="text-lg text-center mb-8">
          We are working hard to bring you an amazing website. Stay tuned!
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
