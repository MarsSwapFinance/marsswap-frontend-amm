import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'

const CACHE_KEY = 'IS_LIGHT'

export interface ThemeContextType {
  isLight: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({ isLight: false, toggleTheme: () => null })

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isLight, setIsLight] = useState(() => {
    const isLightUserSetting = localStorage.getItem(CACHE_KEY)
    return isLightUserSetting ? JSON.parse(isLightUserSetting) : false
  })

  const handleSetup = useCallback(event=>{
    if(event && event.data && typeof event.data === "string" && event.data.startsWith("[iFrameSizer]message:")){
      const dataStr = event.data.substring("[iFrameSizer]message:".length);
      const data = JSON.parse(dataStr);
      setIsLight(() => data.isLight);
    }
  }, []);
  useEffect(()=>{
    window.addEventListener("message", handleSetup);
    return () => {
      window.removeEventListener('message', handleSetup);
    };
  }, [handleSetup]);

  const toggleTheme = () => {
    setIsLight((prevState: any) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      <SCThemeProvider theme={isLight ? light : dark}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
