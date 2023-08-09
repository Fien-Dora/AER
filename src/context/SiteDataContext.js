import { createContext, useContext, useState } from "react";

const SiteDataContext = createContext();

export const useSiteData = () => useContext(SiteDataContext);

export const SiteDataProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(null);

  return (
    <SiteDataContext.Provider value={{ siteData, setSiteData }}>
      {children}
    </SiteDataContext.Provider>
  );
};
