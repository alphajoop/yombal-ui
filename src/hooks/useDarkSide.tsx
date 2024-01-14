import { useEffect, useState } from 'react';

type ColorTheme = 'light' | 'dark';

export default function useDarkSide(): [
  ColorTheme,
  React.Dispatch<React.SetStateAction<ColorTheme>>,
] {
  const [theme, setTheme] = useState<ColorTheme>(
    () => (localStorage.theme as ColorTheme) || 'light'
  );
  const colorTheme: ColorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
