type StatusProps = {
  status: "loading" | "success" | "error";
};

export function Status({ status }: StatusProps) {
  let message;

  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched!";
  } else if (status === "error") {
    message = "Error";
  }

  return <div>{message}</div>;
}
