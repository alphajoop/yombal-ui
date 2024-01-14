import { useState } from 'react';
import { ThemeToggle } from '../';
import useDarkSide from './hooks/useDarkSide';

function App() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState<boolean>(colorTheme === 'light' ? true : false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkSide;
    setTheme(newDarkMode ? 'dark' : 'light');
    setDarkSide(newDarkMode);
  };

  return (
    <section className="flex items-center justify-center bg-gray-50 dark:bg-slate-800 min-h-screen transition-colors duration-500">
      <div className="container flex flex-col items-center justify-center mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-indigo-600 dark:text-gray-50">
              Welcome to Yombal UI
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-500 dark:text-slate-400">
              Yombal UI is a library that provides ready-to-use React components for faster
              development.
            </p>
            <ThemeToggle
              theme={darkSide}
              onClick={toggleDarkMode}
              shouldScaleOnHover={true}
              size={42}
              className="text-indigo-600 dark:text-gray-200 mx-6"
            />
            <div className="font-mono mx-auto max-w-[700px] text-slate-500 dark:text-slate-400">
              Toggle the theme and experience the magic!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
