import { useId } from "react";

export default function FormSelectList() {
  const selectId = useId();

  const handleOrder = (formData: FormData) => {
    const deliveryTime = formData.get("deliveryTime") as string;
    console.log("Preferred delivery time:", deliveryTime);
  };

  return (
    <form action={handleOrder}>
      <label htmlFor={selectId}>Preferred delivery time</label>
      <select name="deliveryTime" id={selectId} defaultValue="">
        <option value="">-- Choose delivery time --</option>
        <option value="morning">Morning (8:00–12:00)</option>
        <option value="afternoon">Afternoon (12:00–16:00)</option>
        <option value="evening">Evening (16:00–20:00)</option>
      </select>

      <button type="submit">Place order</button>
    </form>
  );
}
//
// Перша опція з value="" – це placeholder:
//  вона змушує користувача вибрати варіант вручну.
//  Якщо нічого не вибрано, formData.get("deliveryTime") поверне порожній рядок ("").

// 🧠 Це поширений UX-патерн, який запобігає випадковим виборам і підвищує якість даних у формі.
