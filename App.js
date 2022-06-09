import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { Header } from "./components/index";
import StartGame from "./screens/start-game/index";
import GameScreen from "./screens/game-screen/index";
import { styles } from "./styles";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={onStartGame} />;

  if (userNumber) {
    content = <GameScreen userOptions={userNumber} />;
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
