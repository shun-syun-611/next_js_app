import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ApiList from "../src/compornents/ApiList";

const Members = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(status);

  if (status === "loading") {
    return <div>Loading....</div>;
  }
  if (!session) {
    router.push("/");
  }

  return (
    <div>
      Members Page
      <ApiList />
    </div>
  );
};

export default Members;
