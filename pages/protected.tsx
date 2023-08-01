import { useSession, getSession } from "next-auth/react";

export default function Protected() {
  const { data: session, status } = useSession();
  console.log(status);
  if (status === "loading") {
    return <h1>Loading</h1>;
  }
  if (status === "unauthenticated") {
    return <h1>Access Denied</h1>;
  }
  return (
    <div>
      <h1>Protected Page</h1>
      <p> You are able to view this page if sign up </p>
    </div>
  );
}
