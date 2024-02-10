import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'light' | 'primary'; // Define allowed types here
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, type = 'primary' }) => {
  const baseStyle = 'text-white font-bold py-2 px-4 w-[104px] h-[38px] rounded-lg focus:outline-none focus:shadow-outline';

  const typeStyles = {
    primary: 'bg-[#2970FF] hover:bg-blue-700',
    light: 'bg-[#EEF4FF] text-[#2970FF] hover:bg-gray-400 text-sm',
  };

  const combinedClassName = `${baseStyle} ${typeStyles[type]} ${className || ''}`;

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
