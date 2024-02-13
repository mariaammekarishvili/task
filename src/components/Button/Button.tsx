import React from 'react';

interface ButtonProps {
  children: React.ReactNode | string;
  onClick?: () => void;
  className?: string;
  type?: 'light' | 'primary' | 'base'; // Define allowed types here
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, type = 'primary' }) => {
  const baseStyle = 'font-bold py-2 px-4 w-[104px] h-[38px] rounded-lg focus:outline-none focus:shadow-outline';

  const typeStyles = {
    primary: 'bg-[#2970FF] hover:bg-blue-700 text-white h-[41px]',
    light: 'bg-[#EEF4FF] text-[#2970FF] hover:bg-gray-400 text-sm',
    base: 'text-[#474747] border-[#C7C7C7] hover:bg-gray-100 border-2 mx-2 h-[41px]'
  };

  const combinedClassName = `${baseStyle} ${typeStyles[type]} ${className || ''}`;

  return (
    <button type='submit' className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
