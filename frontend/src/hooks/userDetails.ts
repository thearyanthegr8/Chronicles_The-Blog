import React from "react";
import { useEffect } from "react";
import { userContext } from "../context/userContext";

export function useUserDetails() {
  const value = React.useContext(userContext);

  return value.user;
}
