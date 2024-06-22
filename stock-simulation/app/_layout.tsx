import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import {DarkTheme, ThemeProvider} from "@react-navigation/native";
import {theme} from "@/theme";

export default function RootLayout() {
  return (
    <PaperProvider theme = {theme}>
        <ThemeProvider value={DarkTheme}>
            <Stack>
                <Stack.Screen name="index" />
            </Stack>
        </ThemeProvider>
    </PaperProvider>
  );
}
