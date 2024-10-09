import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 ? "0" : ""}
      {min}:{sec < 10 ? "0" : ""}
      {sec}
    </div>
  );
}
