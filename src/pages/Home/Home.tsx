import { FC, useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { getHomeData } from "./HomeService";
import Page from "../../components/Page";
import { useGetAllQuery } from '@/store/services/empServices';
import "../../components/EmpresaUX.css";

export const Home: FC = () => {
  const {data: empresas} = useGetAllQuery({});
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getHomeData()
      .then((apiData) => {
        setData(apiData.msg);
        setIsLoading(false);
        setError(null);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Error while loading data");
      });
  }, [refresh]);
  return (

    <Page>
      <img src="./components/stiff.jpg" alt="" />

      <h1>Modulos</h1><br />
      <div className="botones-container">
        <button className="ir-a-empresas" onClick={() => window.location.href='http://127.0.0.1:5173/empresas'}>
          Empresas
        </button> 
        <button className="ir-a-empresas" onClick={() => window.location.href='http://127.0.0.1:5173/productos'}>
          Productos
        </button> 
        <button className="ir-a-empresas" onClick={() => window.location.href='http://127.0.0.1:5173/vendedores'}>
          Vendedores
        </button>
      </div>
      <br />




    </Page>
  );
};
