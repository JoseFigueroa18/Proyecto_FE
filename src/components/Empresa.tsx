import { FC, PropsWithChildren} from 'react';
import "./EmpresaUX.css";

export const EmpresaEstilos : FC<PropsWithChildren> = ({children}) => {
    return (
    <div className="empresa2">
        {children}
    </div>
    );
};

export default EmpresaEstilos;