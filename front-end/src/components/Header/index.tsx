import { ContainerHeader, ContentHeader } from './styled';
import logo from '../../assets/images/logo.gif';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';

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
      <button type='button' onClick={() => signOut(auth)}>sair</button>
    </ContainerHeader>
  );
}
