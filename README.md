# Yombal UI

Welcome to Yombal UI, a library that provides ready-to-use React components for faster development.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Theme Toggle](#theme-toggle)
- [Menu Button](#menu-button)

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
import { useState } from 'react';
import { ThemeToggle } from 'yombal-ui';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    // Add logic to update your application's theme
  };

  return (
    <div>
      <h1>Your App</h1>
      <ThemeToggle
        theme={isDarkMode}
        onClick={toggleDarkMode}
        size={24}
        shouldScaleOnHover={true}
        className="custom-styles"
      />
    </div>
  );
}

export default App;
```

### Props

The ThemeToggle component accepts the following props:

1. `theme`: A boolean representing the current theme (true for dark, false for light).
2. `onClick`: A function to be called when the button is clicked, typically used to toggle the theme.
3. `size`: Optional. The size of the toggle button icon.
4. `shouldScaleOnHover`: Optional. Enable or disable the hover scaling effect on the button.
5. `className: Optional`. Additional CSS classes to customize the button's appearance.

Feel free to customize the ThemeToggle component by adjusting the size, shouldScaleOnHover, and applying custom styles using the className prop. Tailor it to seamlessly integrate into your application's design and provide an enhanced user experience.

## Menu Button

The MenuButton component in Yombal UI allows you to easily create a responsive hamburger menu button for your navigation. This button can be used to toggle the visibility of a menu or trigger other actions in your application.

```jsx
import { useState } from 'react';
import { MenuButton } from 'yombal-ui';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
    // Add logic for handling menu visibility
  };

  return (
    <div>
      <h1>Your App</h1>
      <MenuButton onClick={handleMenuClick} isOpen={isMenuOpen} size={24} />
    </div>
  );
}

export default App;
```

### Props

The `MenuButton` component accepts the following props:

1. `onClick`: A function to be called when the button is clicked.
2. `size`: Optional. The size of the button icon.
3. `isOpen`: A boolean indicating whether the menu is currently open or closed.
4. `className`: Optional. Additional CSS classes to customize the button's appearance.

Feel free to customize the component and its styles to fit your application's design. The button will automatically transition between the menu and close icons based on the isOpen prop.
