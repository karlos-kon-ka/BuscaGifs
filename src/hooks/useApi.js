import { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchApi = () => {
    setLoading(true); 
    fetch(url) 
      .then(respuesta => respuesta.json())
      .then(respuestaJson => {
        setData(respuestaJson.data);
        setLoading(false); 
      })
      .catch(error => {
        console.log(error);
        setLoading(false); 
      });
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return { loading, data };
};

export default useApi;
