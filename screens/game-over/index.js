import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Card } from "../../components/index";
import theme from "../../constants/theme";
import { styles } from "./styles";

const GameOver = ({ rounds, choise, onRestart }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortrait = () => {
    setIsPortrait(onPortrait);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait());
    return () => {
      Dimensions.removeEventListener("change", statePortrait());
    };
  });

  return (
    <ScrollView style={styles.scrolllayout}>
      <View style={isPortrait ? styles.container : styles.containerLandscape}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/vectors/game-over-vector-background-emoticon-with-glitch-effect-cyber-gamer-vector-id1182665410?k=20&m=1182665410&s=612x612&w=0&h=-R6phO5biw_KFDY_nVl1e4HLrxujGbMFIUqUIQOtCas=",
          }}
          style={isPortrait ? styles.image : styles.imageLandscape}
          resizeMode="contain"
        />
        <Card style={isPortrait ? styles.result : styles.resultLandscape}>
          <Text>Intentos: {rounds}</Text>
          <Text>El número era: {choise}</Text>
        </Card>
        <Button
          title="Reiniciar"
          onPress={onRestart}
          color={theme.colors.secondary}
        />
      </View>
    </ScrollView>
  );
};

export default GameOver;
