import { ReactNode, createContext, useState } from 'react';

export const AppContext = createContext({
  favoriteMealIds: [] as String[],
  toggleMealFavorite: (id: string) => {},
});

interface IProps {
  children: ReactNode;
}

const AppContextProvider = (props: IProps) => {
  const [favoriteMealIds, setFavoriteIds] = useState<String[]>([]);
  const addToFavorite = (id: string) => {
    setFavoriteIds((ids) => [...ids, id]);
  };
  const removeFromFavorite = (id: string) => {
    setFavoriteIds((ids) => ids.filter((e) => e !== id));
  };  
  const toggleMealFavorite = (id: string) => {
    if (favoriteMealIds.includes(id)) removeFromFavorite(id);
    else addToFavorite(id);
    console.log(favoriteMealIds)
  };

  const contextValue = {
    favoriteMealIds: favoriteMealIds,
    toggleMealFavorite: toggleMealFavorite,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
