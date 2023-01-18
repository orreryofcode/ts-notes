import { PersonProps } from "./Person.types";

export function Person({ person: { first, last } }: PersonProps) {
  return (
    <div>
      {first} {last}
    </div>
  );
}
