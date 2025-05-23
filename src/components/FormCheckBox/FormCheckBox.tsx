// Чекбокси
export default function FormCheckBox() {
  const handleOrder = (formData: FormData) => {
    const restrictions = formData.getAll("restrictions") as string[];
    console.log("Dietary restrictions:", restrictions);
  };

  return (
    <form action={handleOrder}>
      <fieldset>
        <legend>Dietary restrictions:</legend>
        <label>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}
// Усі чекбокси мають однаковий name="restrictions", тому, під час відправки форми, браузер передає масив обраних значень.
// Щоб отримати всі ці значення, ми використовуємо formData.getAll("restrictions") – цей метод завжди повертає масив.
// Тип результату – string[], тому додаємо кастинг типу: as string[].
// Якщо користувач не обрав жоден чекбокс – getAll() поверне порожній масив, а не null.
