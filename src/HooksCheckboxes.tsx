import React from "react";

interface IHooksCheckboxes {
  classes?: any;
}

const HooksCheckboxes: React.SFC<IHooksCheckboxes> = props => {
  return (
    <>
      <input type="checkbox" name="hook" value="useState" checked />
      useState
      <br />
      <input type="checkbox" name="hook" value="useEffect" checked />
      useEffect
      <br />
      <input type="checkbox" name="hook" value="useContext" checked />
      useContext
      <br />
      <input type="checkbox" name="hook" value="useReducer" />
      useReducer
      <br />
      <input type="checkbox" name="hook" value="useCallback" />
      useCallback
      <br />
      <input type="checkbox" name="hook" value="useMemo" />
      useMemo
      <br />
      <input type="checkbox" name="hook" value="useRef" checked />
      useRef
      <br />
      <input type="checkbox" name="hook" value="useImperativeMethods" />
      useImperativeMethods
      <br />
      <input type="checkbox" name="hook" value="useLayoutEffect" />
      useLayoutEffect
      <br />
    </>
  );
};

export default HooksCheckboxes;
