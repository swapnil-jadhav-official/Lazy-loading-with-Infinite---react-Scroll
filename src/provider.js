// CustomHook.js
import { createContext, useContext, useEffect, useState } from 'react';
import { apiInstance } from './api/api';

const CardsDataContext = createContext();

const useCardsData = () => {
  const [cardsData, setCardsData] = useState(null);

  useEffect(() => {
    const fetchCardsData = async () => {
        try {
            // Use apiInstance directly without the additional then/catch
            const response = await apiInstance.get('/photos');
            setCardsData(response.data);
          } catch (error) {
            console.error('Error fetching cards data:', error);
          }
    };

    fetchCardsData();
  }, []);
  return cardsData;
};

const generateContext = (customHook) => {
  const ContextProvider = ({ children }) => {
    const hookResult = customHook();
    return (
      <CardsDataContext.Provider value={hookResult}>
        {children}
      </CardsDataContext.Provider>
    );
  };

  const useGeneratedContext = () => useContext(CardsDataContext);

  return [ContextProvider, useGeneratedContext];
};

const [CardsDataProvider, useCardsDataContext] = generateContext(useCardsData);

export { CardsDataProvider, useCardsDataContext };
