"use client"
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CryptoContext = createContext({});

export type CoinPrices = {
  [key: string]: {
    usd: Number
  },
};

export const CryptoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [coinPrices, setCoinPrices] = useState<CoinPrices>({});

  useEffect(() => {
    const fetchCoinPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            vs_currencies: 'usd',
            ids: 'bitcoin,ethereum,solana,cardano',
          },
        });
        setCoinPrices(response.data);
      } catch (error) {
        console.error('Error fetching coin prices:', error);
      }
    };

    fetchCoinPrices();
  }, []);

  return (
    <CryptoContext.Provider value={coinPrices}>
      {children}
    </CryptoContext.Provider>
  );
};
