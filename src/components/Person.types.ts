export type Name = {
    first: string;
    last: string;
}


export type PersonProps = {
    person: Name;
  };
  
//This allows us to reuse and extend types throughout the application so as to avoid duplication