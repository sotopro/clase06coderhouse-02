import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";
import { NumberContainer, Card } from "../../components/index";
import theme from "../../constants/theme";
import { styles } from "./styles";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ userOptions, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userOptions)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess == userOptions) {
      onGameOver(rounds);
    }
  }, [currentGuess, userOptions, onGameOver]);

  const handlerNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userOptions) ||
      (direction === "higher" && currentGuess > userOptions)
    ) {
      Alert.alert("No mientas!", "Tu sabes que no es verdad", [
        { text: "OK", style: "cancel" },
      ]);
      return null;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((current) => current + 1);
  };
  return (
    <View style={styles.container}>
      <Text>La suposición del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="Menor"
          onPress={() => handlerNextGuess("lower")}
          color={theme.colors.secondary}
        />
        <Button
          title="Mayor"
          onPress={() => handlerNextGuess("higher")}
          color={theme.colors.secondary}
        />
      </Card>
    </View>
  );
};

export default GameScreen;
