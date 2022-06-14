import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
    marginVertical: 10,
    padding: 20,
    width: width / 1.5,
    maxWidth: "80%",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 300,
  },
});
