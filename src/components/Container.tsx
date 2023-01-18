type ContainerProps = {
  styles: React.CSSProperties;
  //CSSProperties ensures that only value CSS can be passed as prop
};

export function Container({ styles }: ContainerProps) {
  return <div style={styles}>Text</div>;
}
