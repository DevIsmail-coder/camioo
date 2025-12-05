import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function RootLayout() {

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="splash-hq1"
          options={{ headerShown: false }
          } />
        <Stack.Screen
          name="splash-hq2"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="splash-hq3"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
