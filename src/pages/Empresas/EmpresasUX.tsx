import { FC } from "react";
import '../../components/EmpresaUX.css';

export interface IEmpresa {
  _id: string;
  codigo: string;
  nombre: string;
  status: string;
  created?: string;
  updated?: string;
  observacion?: string;
}

export interface IEmpresasUXProps {
  empresas: any[];
  isLoading: boolean;
  error: string;
  onViewEmpresaClick: (id: string) => void;
  onAddClick: () => void;
}

export const EmpresasUX: FC<IEmpresasUXProps> = ({
  empresas,
  isLoading,
  error,
  onViewEmpresaClick,
  onAddClick,
}) => {
  return (
    <div className="empresas">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="empresa">
        <span className="codigo">Codigo</span>
        <span className="nombre">Nombre</span>
        <span className="status">Status</span>
        <span className="codigo"><a onClick={onAddClick}>Añadir</a></span>

      </div>
      {empresas && empresas.map((empresa:IEmpresa) => (
        <EmpresaUX
          key={empresa._id}
          _id={empresa._id}
          codigo={empresa.codigo}
          nombre={empresa.nombre}
          status={empresa.status}
          onViewEmpresaClick={function (id: string): void {
            onViewEmpresaClick(id);
          }}
        />
      ))}
    </div>
  );
};


export interface IEmpresaUXProps {
  _id: string;
  codigo: string;
  nombre: string;
  status: string;
  onViewEmpresaClick: (id: string) => void;
}

export const EmpresaUX: FC<IEmpresaUXProps> = ({
  _id,
  codigo,
  nombre,
  status,
  onViewEmpresaClick,
}) => {
  return (
    <div className="empresa"
      data-id={_id}
    >
      <span className="codigo">{codigo}</span>
      <span className="nombre">{nombre}</span>
      <span className="status">{status}</span>
      <span className="status"><a className="UPD" onClick={() => {
        onViewEmpresaClick(_id);
      }}>UPD</a><a className="DEL">DEL</a></span>
    </div>
  );
};