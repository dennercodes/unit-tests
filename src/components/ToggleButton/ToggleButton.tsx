import { useState } from 'react';
import { Button } from '../Button/Button';

interface ToggleButtonProps {
  children: React.ReactNode;
}

export const ToggleButton = ({ children }: ToggleButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Button onClick={handleClick}>{isVisible ? 'Hide' : 'Show'}</Button>
      {isVisible && <div>{children}</div>}
    </div>
  );
};
