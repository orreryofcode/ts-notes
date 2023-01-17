type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export function Greet({ name, messageCount, isLoggedIn }: GreetProps) {
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
