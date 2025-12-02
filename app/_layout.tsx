import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import "../global.css";


export default function RootLayout() {

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen 
        name="(tabs)"
         options={{ headerShown: false }
         } />
        <Stack.Screen
         name="modal"
          options={{ presentation: 'modal',
           title: 'Modal' }}
            />
      </Stack>
    </ThemeProvider>
  );
}
