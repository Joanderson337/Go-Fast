import { FunctionComponent } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

import { LoadingContainer } from './styled';

export const Loading: FunctionComponent = () => {
  return (
    <LoadingContainer>
      <SyncLoader size={30} />
    </LoadingContainer>
  );
};
