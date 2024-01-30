import React, { useMemo } from "react";

function UsersList({ users, startingLetter }) {
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      return user.name[0].toLowerCase() === startingLetter.toLowerCase();
    });
  }, [users, startingLetter]);

  return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default React.memo(UsersList);
