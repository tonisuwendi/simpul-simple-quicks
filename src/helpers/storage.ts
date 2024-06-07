'use client';

import CryptoJS from 'crypto-js';

const setLocalStorage = (key: string, value: string): void => {
  const ciphertext: string = CryptoJS.AES.encrypt(value, process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY ?? '').toString();
  localStorage.setItem(key, ciphertext);
};

const getLocalStorage = (key: string): string => {
  const storageItem = localStorage.getItem(key);
  if (!storageItem) return '';
  const bytes = CryptoJS.AES.decrypt(storageItem, process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY ?? '');
  return bytes.toString(CryptoJS.enc.Utf8);
};

export {
  setLocalStorage,
  getLocalStorage
};
