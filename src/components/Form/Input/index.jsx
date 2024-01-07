import { forwardRef } from "react";

export const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <>
      <label>{label}</label>
      <input ref={ref} {...rest} />
    </>
  );
});
