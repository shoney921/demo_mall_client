import React from "react";
import { useParams } from "react-router";

export default function ReadPage() {
  const { tno } = useParams();

  console.log(tno);

  return <div className="text text-3xl">ReadPage</div>;
}
