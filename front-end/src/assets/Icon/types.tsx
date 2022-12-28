import { ReactComponent as X } from './svg/close-icon.svg';
import { ReactComponent as Close } from './svg/icon-close.svg';

const IconsTypes = {
  x : X,
  close: Close,
};

export default IconsTypes;

export type IconName =
  | 'x'
  | 'close'



