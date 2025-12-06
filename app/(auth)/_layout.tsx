
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
          name="signup"
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="forget-password"
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="reset-password"
          options={{ headerShown: false }}
        />
                 <Stack.Screen
          name="verification"
          options={{ headerShown: false }}
        />
      </Stack>
    </ThemeProvider>
  );
}
