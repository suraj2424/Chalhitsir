import React, { createContext, useRef } from 'react'

export const ServiceContext = createContext();

export default function ServiceContextProvider({ children }) {
    const serviceRef = useRef(null);
  return (
    <ServiceContext.Provider value={{ serviceRef }}>
      {children}
    </ServiceContext.Provider>
  )
}
