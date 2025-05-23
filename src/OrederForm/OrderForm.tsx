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
  // Один id для групи полів
  // return (
  //   <form>
  //     <label htmlFor={`${fieldId}-name`}>Name</label>
  //     <input type="text" name="username" id={`${fieldId}-username`} />

  //     <label htmlFor={`${fieldId}-email`}>Email</label>
  //     <input type="email" name="email" id={`${fieldId}-email`} />

  //     <button type="submit">Place order</button>
  //   </form>
  // );
  //     Ми створили один унікальний fieldId за допомогою useId()
  // Додали до нього суфікси username і email для створення окремих ідентифікаторів для кожного поля
  // Це зменшує кількість викликів useId() і полегшує читання коду
}
