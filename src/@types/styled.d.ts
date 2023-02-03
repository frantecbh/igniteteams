

import 'styled-components';
import theme from 'src/theme';


declare module 'styled-components' {
    type ThemType = typeof theme

    export interface DefaultTheme extends ThemType { }
}