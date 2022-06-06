import React from "react";
import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../src/compornents/layout";
import Seo from "../src/compornents/Seo";
import Members from "./Members";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <Layout title="Home" description="Home">
      <Seo
        pageTitle={"home"}
        pageDescription={"description"}
        pageImg={"https://demo.com"}
        pageImgWidth={1280}
        pageImgHeight={960}
        pagePath={"https://index.tsx"}
      />

      <p>Home</p>

      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn("google", { callbackUrl: "/" })}>
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user?.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </Layout>
  );
};

export default Home;
