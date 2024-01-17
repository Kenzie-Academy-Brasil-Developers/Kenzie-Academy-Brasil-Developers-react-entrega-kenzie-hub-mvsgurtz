import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <>
      <label>{label} </label>
      <input ref={ref}  {...rest} />
      {error? <p>{error.message}</p> : null}
    </>
  );
});
