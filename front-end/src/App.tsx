import { GlobalStyles } from './styles/GlobalStyled';
import { Router } from './routes/Routes';
import { UserContextProvider } from './contexts/user.context';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export function App() {
  return(
    <>
      <UserContextProvider>
        <GlobalStyles />
        <ToastContainer position="top-left" />
        <Router />
      </UserContextProvider>
    </>
  );
}


