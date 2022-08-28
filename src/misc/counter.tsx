import React, { FC, useState } from "react"

export const Counter : FC<{}> = ({ ...props }) => {
  const [count, setCount] = useState(0);

  return (
    <button {...props} onClick={() => setCount(count+1)} style={{
      padding: '16px'
    }}>{count}</button>
  );
}