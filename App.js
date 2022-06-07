import { View, SafeAreaView } from "react-native";
import { Header } from "./components/index";
import StartGame from "./screens/start-game/index";
import { styles } from "./styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Adivina el número" />
        <StartGame />
      </View>
    </SafeAreaView>
  );
}
