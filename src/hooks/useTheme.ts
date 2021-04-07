import { useContext } from 'react'
import { ThemeContext as StyledThemeCopntext } from 'styled-components'
import { ThemeContext } from '../ThemeContext'

const useTheme = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext)
  const theme = useContext(StyledThemeCopntext)
  return { isLight, toggleTheme, theme }
}

export default useTheme
