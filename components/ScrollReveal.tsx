import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation: 'slide-in-left' | 'slide-in-right' | 'slide-in-up' | 'slide-in-down' | 'fade-in-up';
  delay?: string;
  className?: string;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation, 
  delay = '0s', 
  className = '', 
  threshold = 0.1 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, disconnect to keep it visible (no repeat animation on scroll up)
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

  return (
    <div 
      ref={ref} 
      className={`${className} ${animationClass}`} 
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};