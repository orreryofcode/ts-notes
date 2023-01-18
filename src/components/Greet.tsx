type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export function Greet({ name, messageCount, isLoggedIn }: GreetProps) {
  // The values that are destructured from props must be named the same as the values in the custom type ie: GreetProps
  return (
    <div>
      <h1>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread messages.`
          : "Welcome Guest"}
      </h1>
    </div>
  );
}
