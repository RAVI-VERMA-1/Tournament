import { useEffect, useState } from "react";

export default function useDataFun() {
  const [data, setData] = useState({});
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState("");

  useEffect(
    function () {
      // callback?.();

      const controller = new AbortController();

      async function fetchData() {
        try {
          const res = await fetch(
            `https://api.spoonacular.com/recipes/716429/information`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          // setMovies(data.Search);
          // setError("");
          console.log(data);
        } catch (err) {
          if (err.name !== "AbortError") {
            // console.log(err.message);
            //   setError(err.message);
          }
        } finally {
          // console.log("OK");
        }
      }
    },
    [data]
  );

  return { data };
}
