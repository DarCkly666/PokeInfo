import React from "react";

export const useFetch = (url: string, initialState: any) => {
  const [data, setData] = React.useState(initialState);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};
