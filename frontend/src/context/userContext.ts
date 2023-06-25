import React from "react";

export interface User {
  username: string;
  email: string;
  name: string;
}

interface UserContextValue {
  user: User | null;
}

const userContext = React.createContext<UserContextValue>({ user: null });

export { userContext };
