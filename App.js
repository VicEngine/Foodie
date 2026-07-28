import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MainNavigator from './src/navigator/MainNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    OpenSans: require('./src/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'OpenSans-Italic': require('./src/assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'),
    Inter: require('./src/assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
    'Inter-Italic': require('./src/assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf'),
  });

useEffect(() => {
  if (fontsLoaded || fontError) {
    SplashScreen.hideAsync();
  }
}, [fontsLoaded, fontError]);

if (!fontsLoaded && !fontError) {
  return null;
}

return (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);
}


