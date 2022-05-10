import React from "react";
import { useState, useEffect } from "react";
import user from "../../pages/api/users/user.json";

type USER = typeof user;

const ApiList = () => {
  const [users, setUsers] = useState<USER[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const respone = await fetch("/api/users");
      const data = await respone.json();
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <p>jsonPlaceHolder</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ApiList;
