import { useEffect, useState } from "react";

export function Users() {

  return (
    <>
      <h1>Users</h1>
      {status === "error" && <p>{error}</p>}
      {status === "loading" && <p>Loading...</p>}
      <ul>
        {status === "success" &&
          users.map(({ id, firstName, lastName }) => (
            <li key={id}>{`${firstName} ${lastName}`}</li>
          ))}
      </ul>
    </>
  );
}
