import { GlobalStyles } from './styles/GlobalStyled';
import { Router } from './routes/Routes';
import { UserContextProvider } from './contexts/user.context';

export function App() {
  return(
    <>
      <UserContextProvider>
        <GlobalStyles />
        <Router />
      </UserContextProvider>
    </>
  );
}


