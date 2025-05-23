// import axios from "axios";
// // import Form from "./components/Form/Form";
// // import OrderForm from "./components/OrderForm/OrderForm";
// import SearchForm from "./components/SearchForm/SearchForm";
// import { useState } from "react";

// interface Article {
//   objectID: string;
//   title: string;
//   url: string;
// }

// interface ArticlesHttpResponse {
//   hits: Article[];
// }

// export default function App() {
//   // const [values, setValues] = useState<Values>({ x: 0, y: 0, z: 0 });
//   // const updateX = () => {
//   //   setValues({
//   //     ...values,
//   //     x: values.x + 1,
//   //   });
//   // };
//   // const updateY = () => {
//   //   setValues({ ...values, y: values.y + 1 });
//   // };
//   // const updateValue = (key: keyof Values) => {
//   //   setValues({
//   //     ...values,
//   //     [key]: values[key] + 1,
//   //   });
//   // };
//   // const handleOrder = (data: string) => {
//   //   console.log("Order received from:", data);
//   //   // можна зберегти замовлення, викликати API, показати повідомлення тощо
//   // };
//   // 1. Оголошуємо і типізуємо стан
//   const [articles, setArticles] = useState<Article[]>([]);
//   const handleSearch = async (topic: string) => {
//     // Тут будемо виконувати HTTP-запит
//     // console.log(topic);
//     const response = await axios.get<ArticlesHttpResponse>(
//       `https://hn.algolia.com/api/v1/search?query=${topic}`
//     );
//     // 2. Записуємо дані в стан після запиту
//     setArticles(response.data.hits);
//     console.log(response.data); // об'єкт з властивістю hits
//   };
//   return (
//     <>
//       {/* <OrderForm onSubmit={handleOrder} />
//       <Form /> */}
//       <SearchForm onSubmit={handleSearch} />
//       {articles.length > 0 && (
//         <ol>
//           {articles.map(({ objectID, url, title }) => (
//             <li key={objectID}>
//               <a href={url} target="_blank">
//                 {title}
//               </a>
//             </li>
//           ))}
//         </ol>
//       )}
//     </>
//   );
// }
import { useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm/SearchForm";
import type { Article } from "./types/article";
import ArticleList from "./components/Articles/ArticleList";
import OrderForm from "./OrederForm/OrderForm";

interface ArticlesHttpResponse {
  hits: Article[];
}

// export default function App() {
//   const [articles, setArticles] = useState<Article[]>([]);

//   const handleSearch = async (topic: string) => {
//     const response = await axios.get<ArticlesHttpResponse>(
//       `https://hn.algolia.com/api/v1/search?query=${topic}`
//     );
//     setArticles(response.data.hits);
//   };

//   return (
//     <div>
//       <SearchForm onSubmit={handleSearch} />
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// }
export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  // 1. Додаємо стан індикатора завантаження
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (topic: string) => {
    // 2. змінюємо індикатор на true перед запитом
    setIsLoading(true);
    const response = await axios.get<ArticlesHttpResponse>(
      `https://hn.algolia.com/api/v1/search?query=${topic}`
    );
    // 3. Змінюємо індикатор на false після запиту
    setIsLoading(false);
    setArticles(response.data.hits);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {/* 4. Відображаєм повідомлення про завантаження даних в JSX */}
      {isLoading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
      <OrderForm />
    </>
  );
}
