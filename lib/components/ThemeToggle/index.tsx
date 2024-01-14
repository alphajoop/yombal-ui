import PropTypes from 'prop-types';
import { BiMoon, BiSun } from 'react-icons/bi';
import './styles.module.css';

interface ThemeToggleProps {
  theme: boolean;
  onClick: () => void;
  size?: number;
  shouldScaleOnHover?: boolean;
  className?: string;
}

function ThemeToggle({ theme, onClick, size, shouldScaleOnHover, className }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus:outline-none transition duration-300 ease-in-out ${
        shouldScaleOnHover ? 'transform hover:scale-110' : ''
      } ${className || ''}`}
    >
      {theme ? <BiMoon size={size} /> : <BiSun size={size} />}
    </button>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.number,
  shouldScaleOnHover: PropTypes.bool,
  className: PropTypes.string,
};

export default ThemeToggle;
