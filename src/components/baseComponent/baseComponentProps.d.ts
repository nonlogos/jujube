import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

interface IBaseComponentProps {
  /**
   * (not required)
   * you can pass in any custom styles as an object or a template literal. The styles will override default styles
   * @default null
   **/
  customstyles?: any;
  children: ReactNode;
  theme?: DefaultTheme;
  className?: string;
  component?: string;
  displayName?: string;
}

export default IBaseComponentProps;
