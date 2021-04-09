import IBaseComponentProps from '../baseComponent/baseComponentProps';

interface IPaperProps extends IBaseComponentProps {
  elevation?: number;
  $elevation?: number;
  squareCorners?: boolean;
  action?: () => void;
  component?: string;
}

export default IPaperProps;
