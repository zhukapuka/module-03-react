export default function Form() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;

  //   const formData = new FormData(form);
  //   const username = formData.get("username");
  //   console.log("Username:", username);

  //   form.reset();
  // };

  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string; //каже що там точно повертається строка
    console.log("Name:", username);
  };
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input type="text" name="username" />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
  return (
    <form action={handleSubmit}>
      <input type="text" name="username" defaultValue="John Doe" />
      <button type="submit">Submit</button>
    </form>
  );
}
