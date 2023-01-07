import React, { createContext, useState } from "react";
export const AppContext = createContext();
const Appprovider = ({children}) => {
  const [toggle, settoggle] = useState(true);

  const value = { toggle,settoggle };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Appprovider