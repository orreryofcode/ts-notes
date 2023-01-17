type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export function Button({ onClick }: ButtonProps) {
  return <button onClick={(e) => onClick(e, 1)}>Click</button>;
}
