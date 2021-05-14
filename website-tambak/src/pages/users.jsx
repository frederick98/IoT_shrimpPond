import React from "react";

const UsersPage = () => {
  return (
    <div>
      <ul>
        {["Alex", "John", "Jaz", "Fedrik", "Missali"].map((user, idx) => {
          return <li key={idx}>{user}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsersPage;
