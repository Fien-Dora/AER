// DateContext.js

import { createContext, useState } from "react";

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [visitDate, setVisitDate] = useState(new Date());
  const [nextVisitDate, setNextVisitDate] = useState(new Date());

  return (
    <DateContext.Provider value={{ visitDate, nextVisitDate, setVisitDate, setNextVisitDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateContext;
