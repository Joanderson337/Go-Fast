import { ContainerHeader, ContentHeader } from './styled';
import logo from '../../assets/Icon/image/logo.gif';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { Icon } from '../../assets/Icon';

export function Header(){
  return(
    <ContainerHeader>
      <ContentHeader>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>acompanhe os pedidos dos clientes</h2>
          <button type='button' onClick={() => signOut(auth)}>
            <Icon name='close' />
          </button>
        </div>
        <img src={logo} alt="logo" />
      </ContentHeader>
    </ContainerHeader>
  );
}
