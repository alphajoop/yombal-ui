import PropTypes from 'prop-types';
import '../ThemeToggle/styles.module.css';
import MenuIcon from './MenuIcon';
import XIcon from './XIcon';

interface MenuButtonProps {
  onClick: () => void;
  size?: number;
  isOpen: boolean;
  className?: string;
}

function MenuButton({ onClick, size, isOpen, className }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus:outline-none transition duration-300 ease-in-out ${className || ''}`}
    >
      {isOpen ? <XIcon size={size} /> : <MenuIcon size={size} />}
    </button>
  );
}

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default MenuButton;
