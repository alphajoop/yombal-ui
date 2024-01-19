import PropTypes from 'prop-types';
import { BiMenu, BiX } from 'react-icons/bi';
import '../ThemeToggle/styles.module.css';

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
      {isOpen ? <BiX size={size} /> : <BiMenu size={size} />}
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
