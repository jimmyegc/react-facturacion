import axios from "axios";
import { useEffect, useState } from "react";

const Clients = () => {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getClients = async () => {
      const response = await axios("http://localhost:3000/api/v1/clientes");
      console.log(response);
      setTimeout(() => {
        setData(response.data.body);
        setLoading(false);
      }, 1500);
    };

    getClients();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
      {data.map((client) => (
        <div>
          <p>{client.fcNombreCliente}</p>
        </div>
      ))}
    </>
  );
};
export default Clients;
