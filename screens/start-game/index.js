import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Card, Input } from "../../components/index";
import { styles } from "./styles";
import theme from "../../constants/theme";

const StartGame = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const onHandlerChangeText = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.subtitle}>Elija el número</Text>
          <Input
            placeholder="11"
            keyboardType="numeric"
            placeholderTextColor={theme.colors.placeholder}
            maxLength={2}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            value={enteredValue}
            onChangeText={(text) => onHandlerChangeText(text)}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Limpiar"
              color={theme.colors.secondary}
              onPress={() => null}
            />
            <Button
              title="Confirmar"
              color={theme.colors.secondary}
              onPress={() => null}
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
