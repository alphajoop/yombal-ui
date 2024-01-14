# Yombal UI

Welcome to Yombal UI, a library that provides ready-to-use React components for faster development.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Theme Toggle](#theme-toggle)

## Installation

To install Yombal UI, you can use npm or yarn:

```bash
# Using npm
npm install yombal-ui

# Using yarn
yarn add yombal-ui
```

## Usage

Import the components you need from Yombal UI and use them in your React application:

```jsx
import { ThemeToggle, OtherComponent } from 'yombal-ui';

function App() {
  return (
    <div>
      <h1>Your App</h1>
      <ThemeToggle theme={true} onClick={() => console.log('Theme toggled!')} />
      <OtherComponent />
    </div>
  );
}

export default App;
```

## Theme Toggle

Yombal UI provides a ThemeToggle component that you can use to add a theme toggle button to your application. Here's an example of how to use it:

```jsx
Copy code
import { useState } from 'react';
import { ThemeToggle } from 'yombal-ui';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add logic to update your app's theme
  };

  return (
    <div>
      <h1>Your App</h1>
      <ThemeToggle theme={darkMode} onClick={toggleDarkMode} />
    </div>
  );
}

export default App;
```
