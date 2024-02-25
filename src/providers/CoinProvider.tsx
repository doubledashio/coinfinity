"use client"
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CoinContext = createContext({});

export type Coin = {
  id: string;
  name: string;
  symbol: string;
};

export const CoinProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [coinList, setCoinList] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchCoinPrices = async () => {
      try {
        const response = await axios.get('https://api.coinfeeds.io/coins/list');
        setCoinList(response.data);
      } catch (error) {
        console.error('Error fetching coin list:', error);
      }
    };

    fetchCoinPrices();
  }, []);

  return (
    <CoinContext.Provider value={coinList}>
      {children}
    </CoinContext.Provider>
  );
};
