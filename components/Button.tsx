import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-pop-orange via-orange-500 to-yellow-500 text-white shadow-lg shadow-pop-orange/40 hover:shadow-pop-orange/60 hover:-translate-y-0.5 animate-gradient-xy bg-[length:200%_200%]",
    secondary: "bg-white text-pop-orange border-2 border-pop-orange hover:bg-orange-50",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-pop-black",
    dark: "bg-pop-black text-white hover:bg-gray-800",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};