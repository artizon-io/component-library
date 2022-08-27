import React, { FC, useState } from "react"

export const Counter : FC<{}> = ({}) => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count+1)} style={{
      padding: '16px'
    }}>{count}</button>
  );
}