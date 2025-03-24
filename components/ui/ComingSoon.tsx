// components/ComingSoon.tsx
import { ImageUp } from 'lucide-react';
import React from 'react';

interface ComingSoonProps {
  message?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ message = 'Images will be Uploaded Soon' }) => {
  return (
    <div className='flex flex-col items-center justify-center h-64 bg-gray-700/10 rounded-lg shadow-md ring-white/10 ring-1'>
      {/* Image Icon with Subtle Animation */}
      <div className='animate-bounce text-gray-400'>
        <ImageUp size={60} />
      </div>

      {/* Text */}
      <p className='text-gray-500 text-base font-semibold mt-4'>{message}</p>
    </div>
  );
};

export default ComingSoon;
