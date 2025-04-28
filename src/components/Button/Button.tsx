interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
