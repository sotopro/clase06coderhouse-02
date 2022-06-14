import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Card } from "../../components/index";
import theme from "../../constants/theme";
import { styles } from "./styles";

const GameOver = ({ rounds, choise, onRestart }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.istockphoto.com/vectors/game-over-vector-background-emoticon-with-glitch-effect-cyber-gamer-vector-id1182665410?k=20&m=1182665410&s=612x612&w=0&h=-R6phO5biw_KFDY_nVl1e4HLrxujGbMFIUqUIQOtCas=",
        }}
        style={styles.image}
      />
      <Card style={styles.result}>
        <Text>Intentos: {rounds}</Text>
        <Text>El número era: {choise}</Text>
      </Card>
      <Button
        title="Reiniciar"
        onPress={onRestart}
        color={theme.colors.secondary}
      />
    </View>
  );
};

export default GameOver;
