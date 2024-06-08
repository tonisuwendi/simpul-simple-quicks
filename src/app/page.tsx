'use client';

import React from 'react';
import Button from '@/components/elements/Button';
import { STORAGE_ENUM } from '@/helpers/enum';

const Home: React.FC = () => {
  const handleClearData = (): void => {
    localStorage.removeItem(STORAGE_ENUM.INBOX);
    localStorage.removeItem(STORAGE_ENUM.TASK);
    window.location.reload();
  };

  return (
    <div className="text-white/90 p-5">
      <h1 className="font-bold text-3xl mb-4">Dashboard Page</h1>
      <h4 className="text-lg mb-3">
        This data is stored in your local storage. You can reset the data by clicking the button below.
      </h4>
      <Button onClick={handleClearData}>
        Reset Data
      </Button>
    </div>
  );
};

export default Home;
