import { useId } from "react";

export default function OrderForm() {
  const nameId = useId();
  const emailId = useId();

  return (
    <form>
      <label htmlFor={nameId}>Name</label>
      <input type="text" name="username" id={nameId} />

      <label htmlFor={emailId}>Email</label>
      <input type="email" name="email" id={emailId} />

      <button type="submit">Place order</button>
    </form>
  );
}
