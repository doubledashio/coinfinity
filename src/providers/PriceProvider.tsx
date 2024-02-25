"use client"
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PriceContext = createContext({});

export type CoinPrices = {
  [key: string]: {
    usd: Number
  },
};

export const PriceProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [coinPrices, setCoinPrices] = useState<CoinPrices>({});
  const [coinList, setCoinList] = useState<string[]>(['bitcoin', 'ethereum', 'solana', 'arbitrum']);

  useEffect(() => {
    const fetchCoinPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            vs_currencies: 'usd',
            ids: coinList.join(','),
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
    <PriceContext.Provider value={{coinPrices, setCoinList}}>
      {children}
    </PriceContext.Provider>
  );
};
