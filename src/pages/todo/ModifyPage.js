import React from "react";
import { useNavigate, useParams } from "react-router";

export default function ModifyPage() {
  const { tno } = useParams();

  const navigate = useNavigate();

  const moveToRead = () => {
    navigate({ pathname: `/todo/read/${tno}` });
  };

  return (
    <div>
      ModifyPage
      <button onClick={moveToRead}> Move to Read</button>
    </div>
  );
}
