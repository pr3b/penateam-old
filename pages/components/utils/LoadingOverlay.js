import React from 'react';

const LoadingOverlay = ({event}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="text-white text-xl font-semibold">{event} Process is Loading...</div>
    </div>
  );
};

export default LoadingOverlay;
