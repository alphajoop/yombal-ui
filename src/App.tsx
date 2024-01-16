import { useState } from 'react';
import { BiCoffee } from 'react-icons/bi';
import { Button, ThemeToggle } from '../';
import useDarkSide from './hooks/useDarkSide';

function App() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState<boolean>(colorTheme === 'light' ? true : false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkSide;
    setTheme(newDarkMode ? 'dark' : 'light');
    setDarkSide(newDarkMode);
  };

  const handleButtonClick = () => {
    console.log('Button with icon clicked');
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-800 transition-colors duration-500">
      <section className="flex items-center justify-center min-h-screen">
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
              <div className="inline-flex">
                <ThemeToggle
                  theme={darkSide}
                  onClick={toggleDarkMode}
                  shouldScaleOnHover={true}
                  size={42}
                  className="text-indigo-600 dark:text-gray-200 mx-6"
                />
                <Button
                  className="bg-indigo-600 text-gray-50 dark:bg-slate-200 dark:text-slate-800 font-bold"
                  text="Coffee"
                  icon={<BiCoffee size={27} />}
                  onClick={handleButtonClick}
                />
              </div>
              <div className="font-sans  italic mx-auto max-w-[700px] text-slate-500 dark:text-slate-400">
                Toggle the theme and experience the magic!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="components" className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Component Preview
        </h2>
        <div className="max-w-4xl mx-auto mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-slate-700 dark:text-slate-300 text-2xl font-semibold leading-none tracking-tight">
                Toggle theme
              </h3>
            </div>
            <div className="p-6">
              <ThemeToggle
                theme={darkSide}
                onClick={toggleDarkMode}
                shouldScaleOnHover={true}
                size={42}
                className="text-indigo-600 dark:text-gray-200 mx-6"
              />
            </div>
          </div>

          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-slate-700 dark:text-slate-300 text-2xl font-semibold leading-none tracking-tight">
                Button with icon
              </h3>
            </div>
            <div className="p-6">
              <Button
                className="bg-indigo-600 text-gray-50 dark:bg-slate-200 dark:text-slate-800 font-bold"
                text="Coffee"
                icon={<BiCoffee size={27} />}
                onClick={handleButtonClick}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
