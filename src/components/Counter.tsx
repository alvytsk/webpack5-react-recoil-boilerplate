import React, { FunctionComponent } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const counterState = atom({
  key: "counterState",
  default: 5,
});

const counterLabelState = selector({
  key: "counterLabelState",
  get: ({ get }) => {
    const value = get(counterState);
    const label = "Counter: ";
    return `${label}${value}`;
  },
});

export const Counter: FunctionComponent = () => {
  const [value, setValue] = useRecoilState(counterState);
  const valueLabel = useRecoilValue(counterLabelState);

  return (
    <>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
      <br />
      {valueLabel}
    </>
  );
};
