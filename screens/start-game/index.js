import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comenzar Juego</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.subtitle}>Elija el número</Text>
        <TextInput placeholder="Ingresa un numero" keyboardType="numeric" />
        <View style={styles.buttonContainer}>
          <Button title="Limpiar" color="#ACB0BD" onPress={() => null} />
          <Button title="Confirmar" color="#ACB0BD" onPress={() => null} />
        </View>
      </View>
    </View>
  );
};

export default StartGame;
