import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export function PersonList({ names }: PersonListProps) {
  return (
    <div>
      {names.map((name) => (
        <h1>
          {name.first} {name.last}
        </h1>
      ))}
    </div>
  );
}
