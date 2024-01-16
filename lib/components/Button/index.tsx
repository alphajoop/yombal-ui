import PropTypes from 'prop-types';
import { MouseEvent, ReactElement } from 'react';
import '../ThemeToggle/styles.module.css';

interface ButtonProps {
  icon?: ReactElement;
  text?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ icon, text, onClick, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center px-4 py-2 border rounded-lg ${className}`}
      onClick={onClick}
    >
      {text && <span className="mr-2">{text}</span>}
      {icon && <span>{icon}</span>}
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
