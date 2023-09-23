import { useState } from "react";

const useFetch = (url, data) => {
  const [requestSuccess, setrequestSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      setrequestSuccess(true);
      setIsLoading(false);
      setError(false);
    } else {
      setIsLoading(false);
      setError(true);
    }

    return { requestSuccess, error, isLoading };
  });
};

export default useFetch;
