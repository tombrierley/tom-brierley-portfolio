import 'styled-components';
import { Theme } from './theme/main';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}