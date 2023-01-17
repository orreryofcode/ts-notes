type PersonProps = {
  person: {
    first: string;
    last: string;
  };
};

export function Person({ person: { first, last } }: PersonProps) {
  return (
    <div>
      {first} {last}
    </div>
  );
}
