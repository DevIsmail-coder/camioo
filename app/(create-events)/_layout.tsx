
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
                    name="cover"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="date"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="limit"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="time"
                    options={{ headerShown: false }}
                />
            </Stack>
        </ThemeProvider>
    );
}
