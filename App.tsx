import { ThemeProvider } from 'styled-components';

import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'



import { Groups } from '@screens/Groups';

import theme from './src/theme';
import { ActivityIndicator } from 'react-native';

export default function App() {

const [fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold})

if(!fontsLoaded){
  return <ActivityIndicator />
}
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>


  );
}

