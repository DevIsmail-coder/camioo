import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from "@expo-google-fonts/inter";
import { Nunito_400Regular, Nunito_700Bold, useFonts } from "@expo-google-fonts/nunito";
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { ActivityIndicator } from "react-native";
import "../global.css";


export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }
          } />
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="(splash)"
          options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="(create-events)"
          options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="(events)"
          options={{ headerShown: false, }}
        />
      </Stack>
    </ThemeProvider>
  );
}
