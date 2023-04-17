import { FC, useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { getHomeData } from "./HomeService";
import Page from "../../components/Page";
import { useGetAllQuery } from '@/store/services/empServices';
import EmpresaEstilos from "../../components/Empresa";

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
      <h1>Empresas</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <EmpresaEstilos/>
      <div className="empresa2">
      {empresas && !isLoading && !error && empresas.map((empresa: any) => (
        <div className="empresa" key={empresa._id} >
          <span className="codigo">{empresa.codigo}</span>
          <span className="nombre">{empresa.nombre}</span>
          <span className="status">{empresa.status}</span>
        </div>
      ))}
      </div>
      <a
        onClick={() => {
          setRefresh(!refresh);
        }}
      >
        Refresh <br />
      </a>
    </Page>
  );
};
