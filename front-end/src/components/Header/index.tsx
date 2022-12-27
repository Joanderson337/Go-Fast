import { ContainerHeader, ContentHeader } from './styled';
import logo from '../../assets/images/logo.gif';

export function Header(){
  return(
    <ContainerHeader>
      <ContentHeader>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>acompanhe os pedidos dos clientes</h2>
        </div>
        <img src={logo} alt="logo" />
      </ContentHeader>
    </ContainerHeader>
  );
}
