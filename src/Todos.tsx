import React, { useContext } from 'react';

import { Store } from "./App";

const Todos = (props: any) => {
  const { todos } = useContext(Store);

  return (
    <ol>
      {todos.map((todo: string) => (
        <li key={todo}>{todo}</li>
      ))}
    </ol>
  );
};

export default Todos;
