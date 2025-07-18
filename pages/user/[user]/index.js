import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  return (
    <div>
      <p>This is Settings Index Page {router.query.user} </p>
      <button
        onClick={(e) => {
          router.push(`/user/${router.query.user} `);
        }}
      >
        Go oto Settings PAge
      </button>
    </div>
  );
};

export default index;
