import React from "react";
import { useState } from "react";

export default function User_management(props) {
  const [users, setUser] = useState(props.name);
  const addUser = () => {
    var val = prompt("enter a value");
    if (val) {
      setUser([...users, val]);
    }
  };
  const updateUser = ({ index }) => {
    var val = prompt("enter new Name");
    if (val) {
      users[index] = val;
      setUser([...users]);
    }
  };
  const removeUser = ({ name }) => {
    users.filter((items) => {
      return items != name;
    });
    setUser([...users]);
  };
  return (
    <>
      <h1>User Management</h1>
      {users.map((name, index) => {
        return (
          <>
            <hr />
            <div style={{ display: "flex", width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "start",
                }}
              >
                <h2>{name}</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "1000px",
                  justifyContent: "flex-start",
                }}
              >
                <button onClick={() => updateUser({ index })}> Update</button>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button style={{ justifyContent: "flex-end" }}> remove</button>
              </div>
            </div>
            <hr />
          </>
        );
      })}

      <button onClick={addUser}>Add User</button>
    </>
  );
}
