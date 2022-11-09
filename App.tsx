import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts, Outfit_500Medium } from "@expo-google-fonts/outfit";
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { BioRhyme_800ExtraBold } from "@expo-google-fonts/biorhyme";
import {
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold,
} from "@expo-google-fonts/dancing-script";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import AppLoading from "expo-app-loading";
import store from "./src/store";
import { Provider } from "react-redux";

export default function App() {
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Outfit_500Medium,
    Inter_500Medium,
    BioRhyme_800ExtraBold,
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
