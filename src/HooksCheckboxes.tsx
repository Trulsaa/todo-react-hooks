import React from "react";

interface IHooksCheckboxes {
  classes?: any;
}

const CheckBox = (props: { hook: string; checked: boolean }) => (
  <>
    <input
      type="checkbox"
      name="hook"
      value={props.hook}
      checked={props.checked}
    />
    {props.hook}
    <br />
  </>
);

const HooksCheckboxes: React.SFC<IHooksCheckboxes> = props => {
  const hooks = [
    { hook: "useState", checked: true },
    { hook: "useEffect", checked: true },
    { hook: "useContext", checked: true },
    { hook: "useReducer", checked: false },
    { hook: "useCallback", checked: false },
    { hook: "useMemo", checked: true },
    { hook: "useRef", checked: true },
    { hook: "useImperativeMethods", checked: false },
    { hook: "useLayoutEffect", checked: false },
    { hook: "useWindowSize", checked: true },
    { hook: "useHover", checked: true }
  ];

  return (
    <>
      {hooks.map((hook: { hook: string; checked: boolean }) => (
        <CheckBox {...hook} />
      ))}
    </>
  );
};

export default HooksCheckboxes;
