import React, { createContext, useReducer,useState } from 'react';

export const BookContext = createContext();

export const generateRandomId = () => Math.floor(Math.random() * 1000000)

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);


  return (
    <BookContext.Provider value={{ books,dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;