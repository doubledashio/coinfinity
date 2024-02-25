"use client"
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext({});

export type News = {
  url: string;
  title: string;
  image: string;
  summary: string;
  newsSiteName: string;
  newsSiteLogo: string;
  publishDate: Number;
  language: string;
};

export const PriceProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [coinPrices, setCoinPrices] = useState<News[]>([]);
  //TODO: receive from component
  const [coinList, setCoinList] = useState<string[]>(['bitcoin', 'ethereum', 'solana', 'arbitrum']);

  useEffect(() => {
    const fetchCoinNews = async (coin: string) => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            coin_name: coin,
            symbol: 'false',
          },
        });
        //TODO: aggregate
        setCoinPrices(response.data);
      } catch (error) {
        console.error('Error fetching coin prices:', error);
      }
    };

    coinList.map(coin => fetchCoinNews(coin));
  }, []);

  return (
    <NewsContext.Provider value={{coinPrices, setCoinList}}>
      {children}
    </NewsContext.Provider>
  );
};
