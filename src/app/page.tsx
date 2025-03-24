"use client";
import { useState } from "react";

import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";

export default function Home() {
  const [users, setUsers] = useState<{ name: string; email: string }[]>([]);

  const onUserAdd = (name: string, email: string) => {
    setUsers((prev) => [...prev, { name, email }]);
  };

  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </>
  );
}
