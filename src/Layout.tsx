import "./App.css";

import React, { useContext, useRef } from "react";

import { Store } from "./App";
import HooksCheckboxes from "./HooksCheckboxes";
import Loreum from "./Loreum";
import Todos from "./Todos";

const Layout = () => {
  const {
    todos,
    setTodos,
    input,
    setInput,
    showLoreum,
    setShowLoreum
  } = useContext(Store);
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // @ts-ignore
    inputEl.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  const onLoremToggle = () => setShowLoreum(!showLoreum);

  const addToList = (e: any) => {
    if (e.key === "Enter") {
      setTodos([...todos, e.target.value]);
      setInput("");
    }
  };
  const handleInputChange = (e: any) => setInput(e.target.value);

  return (
    <div style={{ margin: 20 }}>
      <h1>Todo</h1>
      <input
        placeholder="value from useState through useContext"
        style={{ width: 250 }}
        ref={inputEl}
        value={input}
        type="text"
        onChange={handleInputChange}
        onKeyPress={addToList}
      />
      <div style={{ marginTop: 10 }}>
        <button onClick={onLoremToggle}>
          toggle Loreum to trigger useEffect
        </button>
      </div>
      {showLoreum ? <Loreum /> : null}
      <Todos />
      <HooksCheckboxes />
      <button onClick={onButtonClick}>top using useRef</button>
    </div>
  );
};

export default Layout;
