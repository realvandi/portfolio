"use client"

import React from "react";

const MyComponent = () => {
  const [message, setMessage] = React.useState("Hello, world!");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Goodbye, world!")}>Change message</button>
    </div>
  );
};

export default MyComponent;