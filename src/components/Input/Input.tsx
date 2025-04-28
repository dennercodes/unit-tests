interface InputProps {
  onChange: (value: string) => void;
}

export const Input = ({ onChange }: InputProps) => {
  return (
    <input
      onChange={e => {
        onChange(e.target.value);
      }}
    />
  );
};
