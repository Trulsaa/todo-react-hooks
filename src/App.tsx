import React, { useState } from "react";

import Layout from "./Layout";

// @ts-ignore
export const Store = React.createContext();

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [showLoreum, setShowLoreum] = useState(true);

  return (
    <Store.Provider
      value={{ todos, setTodos, input, setInput, showLoreum, setShowLoreum }}
    >
      <Layout />
    </Store.Provider>
  );
};

export default App;
