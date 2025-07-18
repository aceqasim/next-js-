import { useRouter } from "next/router";
import React from "react";

const settings = () => {
  const router = useRouter();
  return <p>This is Settings Index Page {router.query.user} </p>;
};

export default settings;
