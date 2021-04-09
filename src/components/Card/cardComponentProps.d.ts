import IBaseComponentProps from '../baseComponent/baseComponentProps';
import { DefaultTheme } from 'styled-components';

export interface ICardComponentProps extends IBaseComponentProps {
  elevation?: number;
  squareCorners?: boolean;
  customstyles?: any;
  action?: () => void;
}

export interface ICardActionAreaProps {
  children?: React.ReactNode;
  elevation?: number;
  action?: () => void;
  theme?: DefaultTheme;
  customstyles?: any;
}

export interface IActionAreaProps {
  $action?: () => void;
  elevation?: number;
  $customstyles?: any;
}

export interface ICardHeaderComponentProps {
  children?: React.ReactNode;
  $customstyles?: any;
  component?: string;
  className?: string;
  subtitle?: number;
  theme?: DefaultTheme;
  actionArea?: boolean;
  action?: () => void;
}

export type cardHeaderSubtitleType = 'subtitle1' | 'subtitle2';

export interface ICardMediaComponentProps {
  children?: React.ReactNode;
  component?: string;
  variant?: 'background';
  src?: string;
  padding?: boolean;
  order?: number;
  $customstyles?: any;
  className?: string;
  alt?: string;
}

export interface ICardComposition extends React.ForwardRefExoticComponent<ICardComponentProps & React.RefAttributes<unknown>> {
  Header: React.FC<ICardHeaderComponentProps>;
  ActionArea: React.FC<ICardActionAreaProps>;
  Media: React.FC<ICardMediaComponentProps>;
}
