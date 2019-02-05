import React, { useState, useEffect } from "react";

import Layout from "./Layout";

// @ts-ignore
export const Store = React.createContext();

function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  // @ts-ignore
  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

function useToggle(initialState: boolean) {
  const [isState, setToggle] = useState(initialState);
  const toggle = () => setToggle(!isState);
  return [isState, toggle];
}

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [showLoreum, toggleLoreum] = useToggle(true);
  const size = useWindowSize();

  return (
    <Store.Provider
      value={{ todos, setTodos, input, setInput, showLoreum, toggleLoreum }}
    >
      <div>
        {size.width}px / {size.height}px
      </div>
      <Layout />
    </Store.Provider>
  );
};

export default App;
