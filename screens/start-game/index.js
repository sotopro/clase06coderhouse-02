import React, { useState } from "react";
import {
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import {
  Card,
  Input,
  NumberContainer,
  CustomText,
} from "../../components/index";
import { styles } from "./styles";
import theme from "../../constants/theme";

const StartGame = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const onHandlerChangeText = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const onHandlerReset = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const onHandlerConfirm = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
  };

  const confirmedOutput = confirmed ? (
    <Card style={styles.inputContainer}>
      <CustomText>Tu selección</CustomText>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button
        title="Empezar Juego"
        onPress={() => onStartGame(selectedNumber)}
        color={theme.colors.secondary}
      />
    </Card>
  ) : null;

  return (
    <KeyboardAvoidingView
      style={styles.containerGeneric}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView style={styles.containerGeneric}>
          <View style={styles.container}>
            <CustomText style={styles.title}>Comenzar Juego</CustomText>
            <Card style={styles.inputContainer}>
              <CustomText style={styles.subtitle}>Elija el número</CustomText>
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
                  onPress={() => onHandlerReset()}
                />
                <Button
                  title="Confirmar"
                  color={theme.colors.secondary}
                  onPress={() => onHandlerConfirm()}
                />
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGame;
