import React, { ReactNode, useState } from "react";
import { recipeDetailsInterface } from "../models/recipe";

interface FavoritesProps {
  addToFavorites: (recipe: recipeDetailsInterface) => void;
  removeFromFavorites: (uri: string) => void;
  favoritesList: recipeDetailsInterface[];
}
const defaultValues: FavoritesProps = {
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  favoritesList: [],
};

export const Favorites = React.createContext<FavoritesProps>(defaultValues);

export default function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favoritesList, setFavoritesList] = useState<recipeDetailsInterface[]>(
    []
  );
  function addToFavorites(recipe: recipeDetailsInterface): void {
    // copy then modify
    let newFavoritesList = [...favoritesList];
    newFavoritesList.push(recipe);
    setFavoritesList(newFavoritesList);
    console.log("favorites list: ", newFavoritesList);
  }

  function removeFromFavorites(uri: string): void {
    // copy then modify
    let newFavoritesList = [...favoritesList];
    let foundIndex = newFavoritesList.findIndex(
      (recipe) => recipe.recipe.uri === uri
    );
    newFavoritesList.splice(foundIndex, 1);
    setFavoritesList(newFavoritesList);
  }

  return (
    <Favorites.Provider
      value={{ addToFavorites, removeFromFavorites, favoritesList }}
    >
      {children}
    </Favorites.Provider>
  );
}
