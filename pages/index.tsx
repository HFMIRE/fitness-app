import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div>
      {session && (
        <>
          <p> Signed in as {session.user.email} </p>
          <Link href="#" onClick={() => signOut()} className="btn-signout">
            Sign out
          </Link>
        </>
      )}
      {!session && (
        <Link href="#" onClick={() => signIn()} className="btn-signin">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Home;
