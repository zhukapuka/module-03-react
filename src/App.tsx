import Form from "./components/Form/Form";

export default function App() {
  // const [values, setValues] = useState<Values>({ x: 0, y: 0, z: 0 });
  // const updateX = () => {
  //   setValues({
  //     ...values,
  //     x: values.x + 1,
  //   });
  // };
  // const updateY = () => {
  //   setValues({ ...values, y: values.y + 1 });
  // };
  // const updateValue = (key: keyof Values) => {
  //   setValues({
  //     ...values,
  //     [key]: values[key] + 1,
  //   });
  // };

  return (
    <>
      <Form />
    </>
  );
}
