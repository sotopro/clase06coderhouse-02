import React, { useState } from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
import { Header } from "./components/index";
import StartGame from "./screens/start-game/index";
import GameScreen from "./screens/game-screen/index";
import GameOver from "./screens/game-over/index";
import { useFonts } from "expo-font";
import { styles } from "./styles";
import theme from "./constants/theme";

export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "open-sans-extrabold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
    "open-sans-italic": require("./assets/fonts/OpenSans-Italic.ttf"),
  });
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  const handleGameOver = (rounds) => {
    setGuessRounds(rounds);
  };

  const handleRestarGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  let content = <StartGame onStartGame={onStartGame} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userOptions={userNumber} onGameOver={handleGameOver} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        rounds={guessRounds}
        choise={userNumber}
        onRestart={handleRestarGame}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Adivina el número" />
        {content}
      </View>
    </SafeAreaView>
  );
}
