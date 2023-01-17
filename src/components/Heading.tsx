type HeadingProps = {
  children: string;
};

export function Heading({ children }: HeadingProps) {
  return <h2>{children}</h2>;
}
