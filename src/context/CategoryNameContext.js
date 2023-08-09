import { createContext, useContext, useState } from "react";

const CategoryNameContext = createContext();

export const useCategoryName = () => useContext(CategoryNameContext);

export const CategoryNameProvider = ({ children }) => {
  const [CategoryName, setCategoryName] = useState(null);

  return (
    <CategoryNameContext.Provider value={{ CategoryName, setCategoryName }}>
      {children}
    </CategoryNameContext.Provider>
  );
};
