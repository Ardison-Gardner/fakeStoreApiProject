import { createContext } from "react";

export const initialState = {
  products: [],
  filteredProducts: [],
  searchQuery: "",
};

// [1,2,3,5]
// qury
// pruduct.filter(by query) = [2,5]
// delte query
// pructu.filter(by empty query) = allProduts

export const GlobalState = createContext(initialState);
