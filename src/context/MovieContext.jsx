import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext) // custom hook for easy use without import created context

export const MovieProvider = ({children}) => {

  const storedFavs = () => {
    const localStorageData = localStorage.getItem('favorites')
    return localStorageData ? JSON.parse(localStorageData) : [];
  } 
  const [favorites, setFavorites] = useState(storedFavs)
  
  // This will set initial favorite array is empty even if data contain in the localStorage. it's fixed with above code.
  // const [favorites, setFavorites] = useState([])
  // useEffect(() => {
  //   const storedFavs = localStorage.getItem('favorites')
  //   if (storedFavs) setFavorites(JSON.parse(storedFavs))
  // }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie) => {
    setFavorites(prev => [...prev, movie])
  }

  const removeFromFavorites = (movieId) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId))
  }

  const isFavorite = (movieId) => {
    return  favorites.some(movie => movie.id === movieId)
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
}