export default function OrderFormRadioButton() {
  const handleOrderRadio = (formData: FormData) => {
    const delivery = formData.get("delivery") as string;
    console.log("Delivery:", delivery);
  };

  return (
    <form action={handleOrderRadio}>
      <fieldset>
        <legend>Delivery method:</legend>

        <label>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>

      <button type="submit">Place order</button>
    </form>
  );
}
// Усі три радіокнопки мають одне ім’я name="delivery" – це робить їх групою, де можна обрати лише один варіант.
// Атрибут value визначає, яке значення отримає поле.
// defaultChecked на першій кнопці означає, що вона вибрана за замовчуванням.
// При сабміті значення зчитується через formData.get("delivery")

// 🧠 У JSX булеві атрибути, як-от defaultChecked, defaultValue, disabled, required тощо, не мають значення true/false, просто їх наявність означає true.
// Наприклад: <input defaultChecked /> – це те саме, що <input defaultChecked={true} />.
